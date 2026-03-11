const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/bookDB")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    category: String,
    price: Number,
    rating: Number,
    year: Number
});

const Book = mongoose.model("Book", bookSchema);

// Search Books by Title
app.get("/books/search", async (req, res) => {
    const { title } = req.query;
    const books = await Book.find({ title: { $regex: title, $options: "i" } });
    res.json(books);
});

// Filter Books by Category
app.get("/books/category/:category", async (req, res) => {
    const { category } = req.params;
    const books = await Book.find({ category });
    res.json(books);
});

// Sort Books
app.get("/books/sort/:field", async (req, res) => {
    const { field } = req.params;
    let sortObj = {};
    if (field === "price") sortObj = { price: 1 };
    else if (field === "rating") sortObj = { rating: -1 };
    const books = await Book.find().sort(sortObj);
    res.json(books);
});

// Top Rated Books
app.get("/books/top", async (req, res) => {
    const books = await Book.find({ rating: { $gte: 4 } }).limit(5);
    res.json(books);
});

// Pagination
app.get("/books", async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 5;
    const skip = (page - 1) * limit;
    const books = await Book.find().skip(skip).limit(limit);
    res.json(books);
});

app.listen(3001, () => console.log("Book server running on http://localhost:3001"));