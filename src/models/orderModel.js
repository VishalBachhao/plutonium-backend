const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    
    userId: { type : ObjectId,
              Ref : "Usr"

    },
	productId: { type : ObjectId,
            Ref : "Product"

    },
	amount: Number,
	isFreeAppUser: String, 
	date: String
    
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema)