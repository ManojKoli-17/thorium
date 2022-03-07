const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const UserMid=require("../middleWare/userMiddleWare.js")



router.get("/createUser",UserMid.mid1,UserController.createUser)
router.get("/basicAPi",UserMid.mid1,UserController.basicAPi)



module.exports = router;