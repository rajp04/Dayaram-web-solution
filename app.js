const express = require('express')
const app = express()
const hbs = require('hbs')
const bodyParser = require('body-parser')
const port = 3000

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/', express.static('../public'))

const mongoose = require('./database/db')
const contact = require('./models/model')

app.set('view engine', 'hbs')
app.set('views', '../views')

const routes = require('./routes/main')
app.use('/', routes)

app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`)
)