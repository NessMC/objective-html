/*//////////////////////////////
         OBJECTIVE HTML
//////////////////////////////*/

export default class Text {

    onText (content) {

        if (content.match(/{.*?}/g)) {
            const matches = content.match(/{.*?}/g)
            if (matches.length > 1) {
                for (const match of matches) {
                    content = content.replace(match, '$' + match)
                }
                console.log(content)
            } else if (matches[0].length === content.length) {
                console.log(content.slice(1, content.length - 1))
            } else {
                for (const match of matches) {
                    content = content.replace(match, '$' + match)
                }
                console.log(content)
            }
        } else {
            console.log('\'' + content + '\'')
        }

    }

    export () {
        
        return {
            tagName : this.tagname ?? undefined,
            onClose : this.onClose ?? undefined,
            onOpen  : this.onOpen  ?? undefined,
            onText  : this.onText  ?? undefined
        }

    }

}