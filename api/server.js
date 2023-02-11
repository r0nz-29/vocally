const mongoose = require("mongoose");
const dotenv = require("dotenv");
const eventEmitter = require("./utils/event.js");

const app = require("./app.js");
dotenv.config();

const PORT = process.env.PORT || 8000;
const DB = process.env.DB_URI;

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Backend running at port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

eventEmitter.on('updateEvent', (book) => {
  console.log(`A book has been updated: ${book}`);
});