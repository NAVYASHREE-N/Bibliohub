import { useEffect, useState } from "react";
import axios from "axios";

const CartPage = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCart = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/cart", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setCart(data);
    } catch (err) {
      console.error("Error fetching cart:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCODCheckout = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/cart/checkout",
        { paymentMethod: "COD" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Order placed successfully (COD)!");
      fetchCart(); // Refresh cart
    } catch (err) {
      console.error("COD checkout error:", err);
      alert("Failed to place COD order.");
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  if (loading) return <p>Loading cart...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>My Cart</h2>
      {!cart || cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.items.map((item) => (
              <li key={item._id}>
                <strong>{item.book?.title || "Unknown Book"}</strong> - Qty: {item.quantity}
              </li>
            ))}
          </ul>
          <button onClick={handleCODCheckout} style={{ marginTop: "20px" }}>
            Place Order (COD)
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
