const renderer = new Renderer()

$(`#container`).on(`click` , `#search-button` , function() {
    const ingredient = $(`#container`).find(`input`).first().val()
    $.get(`/recipes/${ingredient}` , function (data) {
        renderer.render(data)
        console.log(data)
    })
} )



$(`#recipes-container`).on(`click` , `.ingredient-img` , function () {
    const ulList = $(this).closest(`.recipe-div`).find(`ul`).first()
    const firstChild = ulList.children().first().text()
    alert(firstChild)
})