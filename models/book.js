import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  name: String,
  author: String,
  category: Array,
});

const book = mongoose.model("book", bookSchema);

export default book;
