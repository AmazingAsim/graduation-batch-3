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

async function getAllBooks(){
  try {
    let result = await bookModel.find();
    console.log(` from getAllbooks `+result)
    return result
  } catch (error) {
    console.log(error)
  }
}


async function  updateBook(bookId,book){
  try {
    let result = await bookModel.updateOne({_id:bookId},book);
    return result
  } 
  catch (error) {
    console.log(error)
  }
  
}

async function deleteBook(bookId){
  try {
    let result = await bookModel.deleteOne({_id:bookId});
    return result
  } catch (error) {
    console.log(error)
  }
};


module.exports = {addBook,getAllBooks,updateBook,deleteBook};