import mongoose from "mongoose";
import express from "express";
import book from "../models/book.js";

const router = express.Router();

router.get("/books", async (req, res, next) => {
  try {
    const allBooks = await book.find();
    res.status(200).json(allBooks);
  } catch (error) {
    res.send({ message: error });
  }
});

router.get("/book", async (req, res, next) => {
  try {
    const findBook = await book.find({ name: req.query.name });
    res.status(200).json(findBook);
  } catch (error) {
    res.send(error);
  }
});

router.post("/books/add", async (req, res, next) => {
  try {
    const newBook = new book(req.body);
    await newBook.save().then(() => {
      res.status(200).json({
        message: "added!",
      });
    });
  } catch (error) {
    res.send({ message: error });
  }
});

router.delete("/book", async (req, res, next) => {
  try {
    const deletedBook = await book.findByIdAndDeleted(req.params.id);
    res.status(200).json(
      "message": "Deleted successfully"
    )
  } catch (error) {
    res.status(400).json({
      "message": error
    })
  }
});


export default router;
