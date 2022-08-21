const nPub = require("../models/newPublisherModel.js");



const newPub = async function(req,res){
    let data =req.body
    let newPubCreate= await nPub.create(data)
    
    res.send({msg: newPubCreate})

};

module.exports.newPub = newPub;