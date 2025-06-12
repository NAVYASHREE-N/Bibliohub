import express from "express";
import Book from "../models/BookModel.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Dummy descriptions generator
const generateDescription = () => {
  const descriptions = [
    "A thrilling journey of imagination.",
    "Explore the depths of storytelling.",
    "A must-read literary piece.",
    "Inspires creativity and thought.",
    "Heartwarming and beautifully written.",
  ];
  return descriptions[Math.floor(Math.random() * descriptions.length)];
};

// ================================
// GET all books (Requires Auth)
// ================================
router.get("/", authMiddleware, async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    console.error("Error fetching books:", err);
    res.status(500).json({ message: "Failed to fetch books." });
  }
});

// ================================
// GET book by ID (Requires Auth)
// ================================
router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (err) {
    console.error("Error fetching book:", err);
    res.status(500).json({ message: "Failed to fetch book." });
  }
});

// ================================
// POST create a new book
// ================================
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, author, year, price } = req.body;
    if (!title || !author || !year || !price) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newBook = await Book.create({
      title,
      author,
      year,
      price,
      description: generateDescription(),
    });

    res.status(201).json(newBook);
  } catch (err) {
    console.error("Error creating book:", err);
    res.status(400).json({ message: "Something went wrong." });
  }
});

// ================================
// PUT update book
// ================================
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { title, author, year, price } = req.body;

    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, year, price },
      { new: true }
    );

    res.status(200).json(updatedBook);
  } catch (err) {
    console.error("Error updating book:", err);
    res.status(400).json({ message: "Unable to update book." });
  }
});

// ================================
// DELETE a book
// ================================
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    console.error("Error deleting book:", err);
    res.status(500).json({ message: "Error deleting book." });
  }
});

export default router;
