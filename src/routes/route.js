const express = require('express');
const router = express.Router();
const UserModel= require("../models/booksModel.js")
const booksController= require("../controllers/booksController")


router.post("/createBook", booksController.createBook )
router.get("/bookList", booksController.bookList)
router.get("/getBooksInYear", booksController.getBooksInYear)
router.post("/getParticularBooks", booksController.getParticularBooks)
router.get("/getXINRBooks", booksController.getXINRBooks)
router.get("/getRandomBooks", booksController.getRandomBooks)

module.exports = router;

