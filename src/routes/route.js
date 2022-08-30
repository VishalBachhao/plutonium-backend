const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleWare = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",middleWare.m1,middleWare.m2, userController.getUserData)
router.put("/users/:userId",middleWare.m1,middleWare.m2, userController.updateUser)
router.delete('/users/:userId',middleWare.m1,middleWare.m2, userController.deleteUser)

router.post("/users/:userId/posts", userController.postMessage)

module.exports = router;