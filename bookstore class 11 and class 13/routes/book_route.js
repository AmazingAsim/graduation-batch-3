let router = require("express").Router();
let booksController = require("../controllers/book_controller");


router.get('/',booksController.getAllBooks);

router.post('/addbook',booksController.addBook);

router.post('/updatebook',booksController.updateBook);

router.post('/deletebook',booksController.deleteBook);

module.exports = router;