const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try{
  let data = req.body;
  let savedData = await userModel.create(data);
  console.log(req.newAtribute);
  res.status(201).send({ msg: savedData });
  }
  catch{
    res.status(400).send("User not created")
  }
};

const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(401).send({
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
  res.status(200).send({ status: true, data: token });
  }
  catch{
    res.status(400).send("Bad request")
  }
};

const getUserData = async function (req, res) {
  try{
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(404).send({ status: false, msg: "No such user exists" });

  res.status(200).send({ status: true, data: userDetails });
  }
  catch{
    res.status(404).send("User not found")
  }
};

const updateUser = async function (req, res) {

  try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
 
  if (!user) {
    return res.status(404).send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.status(202).send({ status: true, data: updatedUser });
}
catch{
  res.status(406).send("User can't be update")
}
};

const postMessage = async function (req, res) {
  try{
    let message = req.body.message

    let user = await userModel.findById(req.params.userId)
    if(!user) return res.status(404).send({status: false, msg: 'No such user exists'})
    
    let updatedPosts = user.posts


    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

    return res.status(202).send({status: true, data: updatedUser})
  }
  catch{
    res.status(403).send("You cant post")
  }
}

const deleteUser = async function(req,res){
  try{
  let userId = req.params.userId;
  let User = await userModel.findById(userId);

  if(!User) return res.send({status:false , msg: "No such user"})
  let deleteUser = await userModel.findOneAndUpdate({_id: userId}, {$set:{isDeleted: true}},{new:true})
  res.status(200).send({status:true , msg: deleteUser})
  }
  catch{
    res.status(400).send("Cant Update")
  }
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage
module.exports.deleteUser = deleteUser
