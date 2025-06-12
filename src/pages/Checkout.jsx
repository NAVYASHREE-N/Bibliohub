import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const placeCODOrder = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please log in");
        navigate("/login");
        return;
      }

      try {
        await axios.post(
          "http://localhost:5000/api/cart/checkout",
          { paymentMethod: "COD" },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        alert("Order placed successfully with Cash on Delivery!");
        navigate("/orders");
      } catch (error) {
        console.error("Checkout failed:", error);
        alert("Failed to place order");
      }
    };

    placeCODOrder();
  }, []);

  return <p>Placing your order with Cash on Delivery...</p>;
};

export default Checkout;