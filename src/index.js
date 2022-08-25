const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
var os = require('os');
const { timeStamp } = require('console');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

<<<<<<< HEAD
/*app.use (
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        next();
  }
  );*/

  app.use (
    function (req, res, next) {
        let timeNow = Date.now();
        let IPA = req.ip;
        let orRoute = req.originalUrl

        console.log (timeNow,IPA,orRoute);
        next();
  }
  );
=======
// app.use (
//     function (req, res, next) {
//         console.log ("inside GLOBAL MW");
//         next();
//   }
//   );
  
>>>>>>> 9e4c16d4ea1ae2e8bdde64eac93caf8467fd54bc


app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});





