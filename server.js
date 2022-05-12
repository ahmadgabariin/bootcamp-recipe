const express = require(`express`)
const path = require(`path`)
const api = require(`./server/routers/api`)
const app = express()
const port = 8080


app.use(express.json())
app.use(express.urlencoded( {extended : false} ))
app.use(express.static(path.join(__dirname,`dist`)))
app.use(express.static(path.join(__dirname,`node_modules`)))

app.use(`/`, api)


app.listen(port , function() {
    console.log(`Server running on port ${port}`)
})