const UserModel= require("../models/userModel")

const newBooks= async function (req, res) {
    let bookData= req.body
    let saveBooksData= await UserModel.create(bookData)
    res.send({msg: saveBooksData})
}

const getBooks= async function (req, res) {
    let allBooksData= await UserModel.find()
    res.send({msg: allBooksData})
}

module.exports.newBooks= newBooks
module.exports.getBooks= getBooks