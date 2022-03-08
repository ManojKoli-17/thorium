const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")



let mid1=function(req,res,next){
    let xAuthToken = req.headers["x-auth-token"]
    if( xAuthToken != undefined){
        console.log("done")
        next()
    }
    else{
        res.send("Please provide x-auth-token in header")
    }
}



router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

router.get("/users/:userId",mid1,userController.getUserData)

router.put("/users/:userId",mid1,userController.updateUser)

router.delete("/users/:userId",mid1,userController.deleteUser)

module.exports = router;