const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
//const xyz =require('../logger/logger.js')
//const util = require('../util/helper.js'    )
//const validator = require('../validator/formatter.js')
//const lodash = require('lodash')





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

router.get('/test-me4', function (req, res) {
    let a =lodash.chunk(['a', 'b', 'c', 'd'], 2);
    console.log(a)
    res.send('Executed successfully')
});

module.exports = router;

router.get('/student details : name', function (req, res) {
    
    res.send('Executed successfully')
});

module.exports = router;



router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

   // let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
   // let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

module.exports = router;

//1
router.get('/movies', function (req, res){
    let films = ['Don', 'Murder', 'Jannat']
    res.send(films)})

//2 
/*let films = ["Rang de basanti","The shining","Lord of the rings","Batman begins"]
        
router.get('/movies/:indexNumber', function(req, res){
    
    let requestParams = req.params
 
    console.log("This is the request "+ JSON.stringify(requestParams))
    let Index = requestParams.indexNumber
   
    for(let i=0;i<=films.length;i++){
        if(Index==i){
            console.log(films[i])
        }
    }
    res.send('Executed ')
})*/

//3

/*let film = ["Rang de basanti","The shining","Lord of the rings","Batman begins"]
        
router.get('/movies/:indexNumber', function(req, res){
    
    let requestParams = req.params
 
    console.log("This is the request "+ JSON.stringify(requestParams))
    let Index = requestParams.indexNumber
    for(let i=0;i<=film.length;i++){
        if(Index==i){
            console.log(film[i])
        }if(Index>film.length){
            console.log("Invalid")
            break;
    }
    }
   
    res.send('Executed invalid ')
})*/

//4

/*let datas = [ {
    "id": 1,
    "name": "The Shining"
   }, {
    "id": 2,
    "name": "Incendies"
   }, {
    "id": 3,
    "name": "Rang de Basanti"
   }, {
    "id": 4,
    "name": "Finding Nemo"
   }]

   router.get('/films', function(req, res){
    
    let requestParams = req.params
 
    console.log("This is the request "+ JSON.stringify(requestParams))
    console.log(datas);
    
    
   
    res.send('Successful ')
})*/

//5
let abcd = [ {
    "id": 1,
    "name": "The Shining"
   }, {
    "id": 2,
    "name": "Incendies"
   }, {
    "id": 3,
    "name": "Rang de Basanti"
   }, {
    "id": 4,
    "name": "Finding Nemo"
   }]

   router.get('/films/:filmId', function(req, res){
    
    let requestParams = req.params
    
    console.log("This is the request "+ JSON.stringify(requestParams))
    let Id = requestParams.filmId
    for(let i=1;i<=abcd.length;i++){
        if(Id==i){
             console.log(abcd[i-1].name)
        }else{
            console.log("‘No movie exists with this id")
        }
    }
    res.send('Successfull ')
})
   


