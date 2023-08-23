const mongoose = require('mongoose');
const client = require('../config/db');
let userSchema = new mongoose.Schema({
    name:String,
    email:String,
    mobile:{type:String},
    createdAt:{ type: Date, default: Date.now },
    updatedAt:{ type: Date, default: Date.now }
});

let users = client.model('crud',userSchema);
module.exports = users