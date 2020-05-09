/*//////////////////////////////
         OBJECTIVE HTML
             Parser
//////////////////////////////*/

import Lexer from './lexer'
export default class Parser {

    constructor (content = '') {

        this.lexer  = new Lexer(content).lexer()
        this.status = 'NONE'

    }

    parse () {

        if (typeof this.lexer !== 'object') throw new Error('Lexer content must be an object!')

        let   blck_index  = 0,
              blocks      = []

        for (const i of this.lexer) {
            const element    = i[0].split('|').map(x => x.trim()).map(x => x === '' ? x = ' ' : x),
                  char       = element[0],
                  content    = i[1]
            switch (content) {
                case 'BLOCK_START': {
                    blocks.push([])
                    blocks[blck_index].push(char)
                    this.status = 'BLOCK_START'
                    break
                }

                case 'BLOCK_CONTENT': {
                    if (this.status === 'BLOCK_START' || this.status === 'BLOCK_CONTENT') {
                        blocks[blck_index].push(char)
                        this.status = 'BLOCK_CONTENT'
                    }
                    break
                }
                
                case 'BLOCK_VALUE': {
                    if (this.status === 'BLOCK_VALUE') {
                        blocks[blck_index - 1].push(char)
                        this.status = 'BLOCK_VALUE'

                    } else if (this.status === 'BLOCK_END') {
                        ++blck_index
                        blocks.push([])
                        blocks[blck_index - 1] = []
                        blocks[blck_index - 1].push(char)
                        this.status = 'BLOCK_VALUE'
                    }
                    break
                }
                
                case 'BLOCK_VARIABLE': {
                    if (this.status === 'BLOCK_VARIABLE') {
                        blocks[blck_index - 1].push(char)
                        this.status = 'BLOCK_VARIABLE'

                    } else if (this.status === 'BLOCK_END') {
                        ++blck_index
                        blocks.push([])
                        blocks[blck_index - 1] = []
                        blocks[blck_index - 1].push(char)
                        this.status = 'BLOCK_VARIABLE'
                    }
                    break
                }

                case 'BLOCK_END': {
                    if (this.status === 'BLOCK_CONTENT' || this.status === 'BLOCK_START') {
                        blocks[blck_index].push(char)
                        this.status = 'BLOCK_END'
                        ++blck_index
                    }
                    break
                }
            }
        }

        return blocks.map(x => x.join(''))

    }

}