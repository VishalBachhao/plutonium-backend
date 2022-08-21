
const nAuth = require("../models/newAuthorModel.js");

const newAuth = async function (req,res){
    let data = req.body
    let newAuthCreate = await nAuth.create(data)
    res.send({msg : newAuthCreate})
}

module.exports.newAuth = newAuth;