const express = require('express')
const routes = express.Router()
const contact = require('../models/model')

routes.get('/', (req, res) => {
    res.render('index')
})

// contact data call
routes.post('/data', async (req, res) => {

    try {
        const data = await contact.create(req.body)
        res.redirect('/')
    } catch(error) {
        console.log(error)
        res.redirect('/')
    }

})

module.exports = routes