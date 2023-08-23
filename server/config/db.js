const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/my_db`)
.then(con =>{
    console.log('Db connected...')
}).catch(err=>{
    console.log('Db connection error..',err)
})

module.exports = mongoose;