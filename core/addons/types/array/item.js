/*//////////////////////////////
         OBJECTIVE HTML
//////////////////////////////*/

export default class Item {

    get tagname () {
        return 'item'
    }

    onClose () {
        return ',\n'
    }

    export () {

        return {
            tagName : this.tagname,
            onClose : this.onClose,
            onOpen  : this.onOpen ,
            onText  : this.onText ,
            inject  : this.inject
        }

    }

}