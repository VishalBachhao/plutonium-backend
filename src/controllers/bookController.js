const AuthorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")

const creatBuks = async function (req, res) {
    let data = req.body
    let buksData = await bookModel.create(data)
    res.send({ msg: buksData })
}

module.exports.creatBuks = creatBuks






