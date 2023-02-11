// Define book schema
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publisher: { type: String, required: true },
  year: { type: Number, required: true },
  isbn: { type: String, required: true }
});

// Create a model from the schema
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;