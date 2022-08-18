

const express = require('express');
const router = express.Router();

const BookController = require("../controllers/bookController")
const AuthorController = require("../controllers/authorController")


router.post("/creatBuk", BookController.creatBuks)
router.post("/creatAuthors", AuthorController.createAuthor)
router.post("/chetanBhagat", AuthorController.chetanBhagat )
router.post("/twoStates", AuthorController.twoStates )
router.post("authorName", AuthorController.authorName )

module.exports = router;