class Renderer {
    constructor () {

    }


    render (data) {
        $(`#recipes-container`).empty()
        const SOURCE = $(`#recipes-template`).html()
        const TEMPLATE = Handlebars.compile(SOURCE)
        $(`#recipes-container`).append( TEMPLATE({recipes : data}) )

    }
}