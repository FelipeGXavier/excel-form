const express = require('express')
const routes = require('./src/routes')
const path = require('path')

const app = express()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/public'))

app.use(express.urlencoded())
app.use(express.json())
app.use(routes)

app.listen(8080, () => {
    console.log("Server started")
})