const mongoose = require('mongoose')

const contact = mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    text:String
})

module.exports = mongoose.model('contact', contact)