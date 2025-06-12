// // backend/routes/paymentRoutes.js
// import express from "express";
// import stripe from "../utils/stripe.js"; // ✅ use this instead
// import authMiddleware  from "../middleware/authMiddleware.js";

// const router = express.Router();

// router.post("/create-checkout-session", authMiddleware, async (req, res) => {
//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: req.body.cartItems.map(item => ({
//         price_data: {
//           currency: "usd",
//           product_data: { name: item.title },
//           unit_amount: item.price * 100,
//         },
//         quantity: item.quantity,
//       })),
//       mode: "payment",
//       success_url: "http://localhost:5173/orders",
//       cancel_url: "http://localhost:5173/cart",
//     });

//     res.json({ id: session.id });
//   } catch (err) {
//     console.error("Stripe error:", err);
//     res.status(500).json({ message: "Failed to initiate payment" });
//   }
// });

// export default router;