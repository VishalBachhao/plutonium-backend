const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    age: Number,
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users



// String, Number
// Boolean, Object/json, array

//2
const bookSchema = new mongoose.Schema( {
    bookName: {type:String,
              unique:true,
              required:true},
    authorName: String,
    category: {
        type: String,
        enum: ["Fiction", "Thriller", "Crime","Romantic","Comedy",] 
    },
    year: Number,
    
}, { timestamps: true });

module.exports = mongoose.model('book', bookSchema) //users
