// backend/routes/paymentRoutes.js
import express from "express";
import stripe from "../utils/stripe.js"; // ✅ centralized stripe instance
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Creates a Stripe Checkout session from provided cart items
router.post("/create-checkout-session", authMiddleware, async (req, res) => {
  try {
    const { cartItems } = req.body;

    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      return res.status(400).json({ message: "cartItems must be a non-empty array" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: cartItems.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: { name: item.title },
          unit_amount: Math.round(Number(item.price) * 100),
        },
        quantity: Number(item.quantity) || 1,
      })),
      mode: "payment",
      success_url: "http://localhost:5173/orders",
      cancel_url: "http://localhost:5173/cart",
    });

    res.json({ id: session.id, url: session.url });
  } catch (err) {
    console.error("Stripe error:", err);
    res.status(500).json({ message: "Failed to initiate payment" });
  }
});

export default router;