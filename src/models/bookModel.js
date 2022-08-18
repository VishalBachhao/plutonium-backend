const mongoose = require('mongoose');

const bukSchema = new mongoose.Schema({
    name: String,
    author_Id: {
        type: Number,
      
    },
    price: Number,
    rating: Number,

}, { timestamps: true });


module.exports = mongoose.model('Bukk', bukSchema)






