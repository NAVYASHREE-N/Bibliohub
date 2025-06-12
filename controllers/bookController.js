import Book from "./models/Book.js"; // Ensure this matches your model file

// Get all books
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single book by ID
export const getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Create a book
export const createBook = async (req, res) => {
  try {
    const { title, author, year, description, price } = req.body;
    if (!title || !author || !year || !price) {
      return res.status(400).json({ message: "Title, author and price are required" });
    }
    const newBook = new Book({ title, author, year, description, price });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    console.error("Create book error:", err);
    res.status(500).json({ message: "Failed to create book" });
  }
};

// Update a book
export const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedBook) return res.status(404).json({ error: "Book not found" });
    res.status(200).json(updatedBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a book
export const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) return res.status(404).json({ error: "Book not found" });
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
