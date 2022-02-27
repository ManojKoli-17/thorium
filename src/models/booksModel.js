const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema( {
   
   bookName:String,
   authorName:String,
   category:String,
   year:Number
}, { timestamps: true });

module.exports = mongoose.model('User', booksSchema) //users



