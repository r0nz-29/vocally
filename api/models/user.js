import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  pwd: String,
  add: String,
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book"
    }
  ]
});

const User = new mongoose.model("User", userSchema);
export default User;