const OrderModel = require("../models/orderModel")
const ProductModel = require("../models/productModel")
const UsrModel = require("../models/usrModel")

const createOrder= async function (req, res) {
    let data= req.body

    let savedData= await OrderModel.create(data)
    res.send({msg: savedData})
}

module.exports.createOrder = createOrder

const findOrder= async function (req, res) {
    let data= req.body

    let savedData= await OrderModel.find().populate("userId").populate("productId")
    res.send({msg: savedData})
}

module.exports.findOrder = findOrder