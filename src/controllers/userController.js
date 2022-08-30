const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


try{
    const createUser = async function (req, res) {
        let data = req.body;
       let savedData = await userModel.create(data);
       res.send({ msg: savedData });
   }
}
catch(error){
    res.status(201).send(error) //created
}

//========================


try{
    const loginUser = async function (req, res) {
        let userName = req.body.emailId;
        let password = req.body.password;
    
        let user = await userModel.findOne({ emailId: userName, password: password });
        if (!user)
            return res.send({
                status: false,
                msg: "username or the password is not corerct",
            });
        let token = jwt.sign(
            {
                userId: user._id.toString(),
                batch: "thorium",
                organisation: "FUnctionUp",
            },
            "functionup-thorium"
        );
        res.setHeader("x-auth-token", token);
        res.send({ status: true, data: token });
    };
   
}
catch(error){
    res.status(401).send(error) //unauthorised
}

//========================

try{
   
    const getUserData = async function (req, res) {
        let token = req.headers["x-Auth-token"];
      
        if (!token) return res.send({ status: false, msg: "token must be present" });
    
        console.log(token);
    
    
        let decodedToken = jwt.verify(token, "functionup-thorium");
        if (!decodedToken)
            return res.send({ status: false, msg: "token is invalid" });
    
        let userId = req.params.userId;
        let userDetails = await userModel.findById(userId);
        if (!userDetails)
            return res.send({ status: false, msg: "No such user exists" });
    
        res.send({ status: true, data: userDetails });
    };
}
catch(error){
    res.status(401).send(error)  //unauthorised
}


//========================

try{
    const updateUser = async function (req, res) {
        let userId = req.params.userId;
        let user = await userModel.findById(userId);
        if (!user) {
            return res.send("No such user exists");
        }
    
        let userData = req.body;
        let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
        res.send({ status: updatedUser, data: updatedUser });
    }; true
   
}
catch(error){
    res.status(403).send(error)  //client does not have access rights to the content
}

//========================

try{
    let deleteUser = async function (req, res) {
        let usr = req.params.userId
        let usrDt = await userModel.findById(usr)
        if (!usrDt) return res.send({ status: false, msg: 'No such user exists' })
        let updatUser = await userModel.findOneAndUpdate({ _id: usrDt._id }, { isDeleted: true }, { new: true })
        res.send({ status: true, msg: updatUser })
    
    }
    
   
}
catch(error){
    res.status(403).send(error)  //client does not have access rights to the content
}




module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser
