let bookModel = require('../model/book_model');

async function addBook(book){
  try {
    let newBook = new bookModel(book);
    let result = await newBook.save();
    console.log(result);
    return result
  } catch (error) {
    console.log(error)
  }
}

module.exports = {addBook}