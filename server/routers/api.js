const express = require(`express`)
const router = express.Router()
const urllib = require('urllib');
router.get(`/sanity`, function(request, response) {
    response.send(`OK`)
})


router.get(`/recipes/:ingredient` , function(request , response) {
    const ingredient = request.params.ingredient
    const URL = `https://recipes-goodness.herokuapp.com/recipes/${ingredient}`

    urllib.request(URL,function (err , data ,res) {
        let arr = JSON.parse(data).results
        .map(obj => {
             return {
                     ingredients : obj.ingredients ,
                     title : obj.title , 
                     thumbnail : obj.thumbnail ,
                     href : obj.href
                     } })
        //response.send(JSON.parse(data).results)
        response.send(arr)
    })
})



module.exports = router