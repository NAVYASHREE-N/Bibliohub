import { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/orders", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrders(res.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
        alert("Failed to load orders");
      }
    };

    fetchOrders();
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        orders.map((order) => {
          // ✅ Calculate total amount
          const totalAmount = order.items.reduce((total, item) => {
            const price = item.book?.price || 0;
            return total + price * item.quantity;
          }, 0);

          return (
            <div key={order._id} style={{ marginBottom: "30px" }}>
              <strong>Order ID:</strong> {order._id}
              <ul>
                {order.items.map((item) => (
                  <li key={item.book._id}>
                    {item.book.title} - Qty: {item.quantity} - ₹{item.book.price}
                  </li>
                ))}
              </ul>
              <p><strong>Total Amount:</strong> ₹{totalAmount.toFixed(2)}</p>
              <hr />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Orders;
