const Book = require("../models/book.js");
const eventEmitter = require("../utils/event.js");

async function getBooks(req, res) {
  const books = await Book.find();
  res.json(books);
}

async function getBookById(req, res) {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({message: "Book not found"});
  res.json(book);
}

async function addBook(req, res) {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    publisher: req.body.publisher,
    year: req.body.year,
    isbn: req.body.isbn
  });
  await book.save();
  res.json(book);
}

async function updateBookById(req, res) {
  const book = await Book.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    author: req.body.author,
    publisher: req.body.publisher,
    year: req.body.year,
    isbn: req.body.isbn
  }, {new: true});
  if (!book) return res.status(404).json({message: "Book not found"});
  eventEmitter.emit("updateEvent", req.params.id);
  res.json(book);
}

async function deleteBookById(req, res) {
  const book = await Book.findByIdAndDelete(req.params.id);
  if (!book) return res.status(404).json({message: "Book not found"});
  res.json({message: "Book deleted successfully"});
}

module.exports = {getBooks, getBookById, addBook, updateBookById, deleteBookById};