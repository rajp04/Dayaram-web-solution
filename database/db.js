const mongoose = require('mongoose')

mongoose.connect('mongodb://0.0.0.0:27017/Dayaram')
.then (()=>{
    console.log('Successfully')
}).catch((error)=>{
    console.log(error)
})

