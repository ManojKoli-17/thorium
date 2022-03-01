const booksModel = require("../models/booksModel");

const createBook = async function (req, res) {
  let bookData = req.body;
  let saveBooksData = await booksModel.create(bookData);
  res.send({ msg: saveBooksData });
};

const bookList = async function (req, res) {
  let allBooksData1 = await booksModel
    .find()
    .select({ bookName: 1, authorName: 1 });
  res.send({ msg: allBooksData1 });
};

const getBooksInYear = async function (req, res) {
  let result = req.query.result;
  let allBooksData2 = await booksModel.find({ year: { $eq: result } });
  res.send({ msg: allBooksData2 });
};

const getParticularBooks = async function (req, res) {

  let allBooksData3 = await booksModel.find({$or:[{bookName:{$eq:'hi'}},{year:{$eq:2020}}]});
  res.send({ msg: allBooksData3 });
};


const getXINRBooks = async function (req, res) {
  let {indianPrice, europePrice}=booksModel.price
  let allBooksData4 = await booksModel.find({
    $or: [
      { indianPrice: { $eq: "100INR" } },
      { indianPrice: { $eq: "200INR" } },
      { indianPrice: { $eq: "500INR" } },
    ],
  });
  res.send({ msg: allBooksData4 });
  // console.log(allBooksData4)
};

const getRandomBooks = async function (req, res) {
 
  let allBooksData5 = await booksModel.find({
    $or: [{ stockAvailable: { $eq: true } }, { totalPages: { $gt: 500 } }],
  });

  res.send({ msg: allBooksData5 });
};

module.exports.createBook = createBook;
module.exports.bookList = bookList;
module.exports.getBooksInYear = getBooksInYear;
module.exports.getParticularBooks = getParticularBooks;
module.exports.getXINRBooks = getXINRBooks;
module.exports.getRandomBooks = getRandomBooks;
