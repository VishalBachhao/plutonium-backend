const express = require('express');
const router = express.Router();

//const authorController= require("../controllers/authorController")
//const bookController= require("../controllers/bookController")
const nAuthController = require("../controllers/newAuthorController")
const nPubController = require("../controllers/newPublisherController")
const nBookController = require("../controllers/newBookController")

/*router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)*/

router.post("/createNewAuthor", nAuthController.newAuth  )

router.post("/createNewPublisher", nPubController.newPub  )

router.post("/createNewBook", nBookController.newBook   )

router.post("/updatedBook", nBookController.allnBook    )

router.post("/getDetails", nBookController.getDetails   )





module.exports = router;