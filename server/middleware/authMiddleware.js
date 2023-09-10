const jwt = require("jsonwebtoken")

module.exports = function(req,res,next){

    
try{

const token = req.headers.authorization.split(" ")[1];



const decoded = jwt.verify(token,process.env.jwt_secret);



req.body.userId = decoded._id;

next();

}catch{
    
req.status(401).send({success: false , message: "Invalid token"})


}



}