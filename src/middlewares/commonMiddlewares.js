const UsrModel = require("../models/usrModel")
const ProductModel = require("../models/productModel")
const OrderModel = require("../models/orderModel")

/*const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}

module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4*/

const mid1= function ( req, res, next) {
    let hdr = req.headers.isfreeappuser
    if(!hdr){
        res.send("important header is missing");
        console.log("Not working")
    }
     else{
     console.log("working")
    next()
     }
}

module.exports.mid1= mid1

const mid2= async function ( req, res, next) {
    let idData = req.body.userId
    let prData = req.body.productId
    let usId = await UsrModel.findOne({_id:{$eq:idData}})
    console.log(usId)
    let prId = await ProductModel.findOne({_id:{$eq:prData}})
    console.log(prId)
    if(!usId || !prId){
        console.log("Invalid1")
        res.send("invalid ID")
    }
     
     next()
       
}

module.exports.mid2 = mid2

// For every purchase we save an order document in the orders collection. isFreeAppUser property in an Order document depends on the header **isFreeAppUser**. If the **isFreeAppUser** header is true then the balance of the user is not deducted and the amount in order is set to 0 as well the attribute in order **isFreeAppUser** is set to true. If this header has a false value then the product’s price is checked. This value is deducted from the user’s balance and the order amount is set to the product’s price as well as the attrbiute **isFreeAppUser** is set to false in order document.

const mid3= async function ( req, res, next) {
    let hdr = req.headers.isfreeappuser
    let uId = req.body.userId
    let pId = req.body.productId
     let propOrd = await OrderModel.findOne({userId:{$eq:uId}}).updateMany({isFreeAppUser:{$ne:hdr}},{$set:{isFreeAppUser:{$eq:hdr}}},{$new:true})
     let Pro = await PrductModel.findOne({_id:{$eq:pId}}).select({price:1,id:0})
     let Ord = await OrderModel.findOne({_id:{$eq:pId}}).select({amount:1,id:0})
     let deduct = Ord - Pro
    if(isfreeappuser != "true"){
        let final = await propOrd.updateMany({amount:{$gt:Pro}},{$set:{amount:{$eq:deduct}}},{$new:true}).updateMany({isFreeAppUser:{$eq:"true"}},{$set:{isFreeAppUser:{$eq:"false"}}},{$new:true})
        res.send(final)
    }
    next()
       
}

module.exports.mid3 = mid3