const router = require("express").Router();
const bookController = require("../controllers/book.js");
const log = require("../middleware/logger.js");
const isAuth = require("../middleware/auth.js");

// Get all books
router.get("/books", log, bookController.getBooks);
// Get a book by ID
router.get("/books/:id", log, bookController.getBookById);
// Add a new book
router.post("/books", log, isAuth, bookController.addBook);
// Update a book
router.put("/books/:id", log, bookController.updateBookById);
// Delete a book
router.delete("/books/:id", log, isAuth, bookController.deleteBookById);
// Info message at homepage
router.get("/", (req, res) => res.send("header over to /docs for documentation"));

module.exports = router;