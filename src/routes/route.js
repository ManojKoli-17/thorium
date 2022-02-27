const express = require('express');
const router = express.Router();
const UserModel= require("../models/booksModel.js")
const UserController= require("../controllers/userController")


router.post("/newBooks", UserController.newBooks )

router.get("/getBooks", UserController.getBooks)

module.exports = router;