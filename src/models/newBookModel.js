const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const newBookSchema = new mongoose.Schema({
   
    name: String,
    price: Number,
    rating: Number,
    author_Id : {
        type : ObjectId,
        ref : "newAuthor",
        
    },
    publisher_Id: {
        type : ObjectId,
        ref : "newPublisher"

    }


},{timestamps:true }

);

module.exports = mongoose.model('newBook',newBookSchema)
