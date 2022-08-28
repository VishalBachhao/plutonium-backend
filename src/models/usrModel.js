const mongoose = require('mongoose');

const usrSchema = new mongoose.Schema( {
    firstName: String,
    balance: { type: Number,
            default : 100
    },
    address: {
        type: String,
        
    },
    age: Number,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    isFreeappUser :{
        type:Boolean,
        default : false
    }
    
}, { timestamps: true });

module.exports = mongoose.model('Usr', usrSchema) //users