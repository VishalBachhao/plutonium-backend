const UsrModel = require("../models/usrModel")

const createUsr= async function (req, res) {
    let data= req.body

    let savedData= await UsrModel.create(data)
    res.send({msg: savedData})
}

module.exports.createUsr = createUsr