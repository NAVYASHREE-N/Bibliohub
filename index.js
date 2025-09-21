import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js"; // path to db.js

// Routes
import bookRoutes from "./routes/booksRoute.js";
import cartRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import genreRoutes from "./routes/genreRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";

// Middleware
import authMiddleware from "./middleware/authMiddleware.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Public Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// Protected Routes
app.use("/api/cart", authMiddleware, cartRoutes);
app.use("/orders", authMiddleware, orderRoutes);
app.use("/reviews", authMiddleware, reviewRoutes);
app.use("/genres", authMiddleware, genreRoutes);
app.use("/books", authMiddleware, bookRoutes);

// Connect to MongoDB Atlas
connectDB();

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
