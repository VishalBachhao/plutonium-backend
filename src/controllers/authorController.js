const AuthorModel = require("../models/authorModel");
const BookModel = require("../models/bookModel.js")
const createAuthor = async function (req, res) {
    let newAuthor = req.body;
    let savedAuthor = await AuthorModel.create(newAuthor);
    res.send({ msg: savedAuthor });
};

module.exports.createAuthor = createAuthor;

const chetanBhagat = async function (req, res) {
    let newAuthor = req.body;
    let cBooks= await AuthorModel.findOne( {author_Name : "Chetan Bhagat" } )
    let Id = cBooks.author_Id
    let bBook= await BookModel.find( {author_Id : {$eq: Id} } )
    
    res.send({ msg: bBook });
};

module.exports.chetanBhagat = chetanBhagat;

const twoStates = async function(req, res){
    let data = req.body;// {price:100}
    let allBooks= await BookModel.findOneAndUpdate( 
        { name : "Two States"} , //condition
        { $set: data }, //update in data
        { new: true , upsert: true} ,)
     res.send({ msg: allBooks });

     let authorName= await AuthorModel.find({author_Id: allBooks.author_Id } ).select({author_Name:1});
     res.send({ msg: authorName });
}

module.exports.twoStates = twoStates;



const authorName = async function (req,res) {
    const booksId= await BookModel.find({price: {$gte:50, $lte:100}}).select({author_id: 1, _id:0})
    const id = booksId.map(inp => inp.author_id)
 let temp =[]
    for(let i=0; i<id.length; i++) {
        let x = id[i]
        const author = await AuthorModel.find({author_id:x}).select({author_name: 1, _id:0})
        temp.push(author)
    }
   const authorName = temp.flat()
  res.send({msg:authorName})

}

module.exports.authorName = authorName;