const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const authenticate = function (req, res, next) {
  //check the token in request header
  //validate this token
  try{
  let token = req.headers["x-auth-token"];
  //   if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.status(400).send({ status: false, msg: "token must be present" });

    let decodedToken = jwt.verify(token, "functionup-thorium");
  //   console.log(decodedToken)
    if (!decodedToken) return res.status(400).send({ status: false, msg: "token is invalid" });
    next()
  }
  catch{
    res.status(401).send("Not Authenticated")
  }
}


const authorise = function (req, res, next) {
  // comapre the logged in user's id and the id in request
  try{
    let userToBeModified = req.params.userId;
  let token = req.headers["x-auth-token"];
  let decodedToken = jwt.verify(token, "functionup-thorium");
  let userLoggedIn = decodedToken.userId;
  if (userToBeModified != userLoggedIn)
  return res.status(401).send({
    status: false,
    msg: "User logged is not allowed to modify the requested users data",
  });
  next();
}
catch{
  res.status(401).send("Not Authorized")
}
  
};
module.exports.authenticate = authenticate;
module.exports.authorise = authorise;
