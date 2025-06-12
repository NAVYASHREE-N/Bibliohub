import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    year: "",
    description: "",
    price: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.post("http://localhost:5000/books", formData, {
        headers: { Authorization: `Bearer ${token}` }, // Fixed spacing
      });
      alert("Book created!");
      navigate("/home");
    } catch (err) {
      console.error("Error creating book:", err.response?.data || err.message);
      alert("Failed to create book");
    }
  };

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "600px",
        margin: "auto",
        marginTop: "4rem",
        backgroundColor: "#f9fafb",
        borderRadius: "12px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Add a New Book</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="number"
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          style={inputStyle}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#10b981",
            color: "white",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const inputStyle = {
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "1rem",
};

export default CreateBook;

