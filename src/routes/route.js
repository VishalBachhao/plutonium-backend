const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
const xyz =require('../logger/logger.js')
const util = require('../util/helper.js'    )
const validator = require('../validator/formatter.js')



router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('welcome everyone!')
});


router.get('/test-you', function(req, res){
    console.log("okay I am running good")
    res.send('This is the second routes implementation')
})

router.get('/test-me1', function (req, res) {
   
    xyz.wlc()
    res.send('welcome folks!')
});
module.exports = router;
// adding this comment for no reason

router.get('/test-me2', function (req, res) {
   
    console.log(util.dy())
    console.log(util.batch())
    res.send('Day is printed')
});
module.exports = router;

router.get('/test-me3', function (req, res) {
   console.log(validator.upr());
   console.log(validator.trm());
   console.log(validator.lwr());
   
    res.send('Executed successfully')
});
module.exports = router;
