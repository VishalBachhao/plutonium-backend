const nBook = require("../models/newBookModel.js");
const nAuth = require("../models/newAuthorModel.js");
const nPub = require("../models/newPublisherModel.js");

const newBook = async function(req,res){
   
    let data = req.body
    let newBookCreate = await nBook.create(data);

    let authIdValidate = await nAuth.findOne({newAuthor_Id:{$eq:data.author_Id}})
    let pubIdValidate = await nPub.findOne({newPublisher_Id:{$eq:data.publisher_Id}});
        
    if(data.author_Id  && data.publisher_Id){
       
            res.send({msg: newBookCreate}) 
    }
    res.send({msg:"author_Id or publisher_Id is missing or wrong"})

    if(data.author_Id==authIdValidate.id  &&  data.publisher_Id==pubIdValidate ){
        res.send({msg: newBookCreate})
    }
    res.send({msg:"author_Id or publisher_Id is missing or wrong"});
    
};

module.exports.newBook = newBook;

const allnBook = async function(req,res){
    let data = req.body
    let allNewBookCreate = await nBook.find().populate("author_Id").populate("publisher_Id");
    res.send({msg: allNewBookCreate})

};

module.exports.allnBook = allnBook;

const getDetails = async function(req,res){
    let allbooks = await nBook.find()
    let allNewBookCreate = await allbooks.find().populate("author_Id").populate("publisher_Id");
    res.send({msg: allNewBookCreate})
    console.log(allNewBookCreate)
};

module.exports.getDetails = getDetails