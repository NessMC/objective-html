/*//////////////////////////////
         OBJECTIVE HTML
            Printing
//////////////////////////////*/

export default class Array {

    get tagname () {
        return 'array'
    }

    onClose () {
        return ']'
    }

    onOpen  (tag, index, attrs) {

        return '['

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