const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let authorId = book.author
    let publisherId = book.publisher

    //validation a
    if(!authorId) return res.send('The request is not valid as the author details are required.')

    //validation b
    let author = await authorModel.findById(authorId)
    if(!author) return res.send('The request is not valid as no author is present with the given author id')

    //validation c
    if(!publisherId) return res.send('The request is not valid as the publisher details are required.') 

    //validation d
    let publisher = await publisherModel.findById(publisherId)
    if(!publisher) return res.send('The request is not valid as no publisher is present with the given publisher id')

    let bookCreated = await bookModel.create(book)
    return res.send({data: bookCreated})
}

const getBooks= async function (req, res) {
    let books = await bookModel.find().populate('author publisher')
    res.send({data: books})
}

// 5th Put API

// const updatedBook= async function (req, res) {
    
//     let abc=await publisherModel.find({$or:[{name:{$eq:"Penguin"}},{name:{$eq:"HarperCollins"}}]}).select("_id").updateMany({isHardCover:true})
//     if(bookModel.author==abc[0]._id)
//     res.send("hi")
    
  
// }
const updatedPrice= async function (req, res) {

    await bookModel.find({ratings:{$gte:3.5}}).updateMany({$inc:{price:10}})

    res.send("Price successfully Updated")
}




module.exports.createBook= createBook
module.exports.getBooks= getBooks
// module.exports.updatedBook= updatedBook
module.exports.updatedPrice= updatedPrice

