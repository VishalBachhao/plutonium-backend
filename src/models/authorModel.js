const mongoose = require('mongoose');
const authorSchema = new mongoose.Schema({

    author_Id: Number,
    author_Name: { type: String, required: true },
    age: Number,
    address: String,

}, { timestamps: true });


module.exports = mongoose.model('authr', authorSchema)