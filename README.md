# 📚 Book Store Management System

A full-stack JavaScript-based web application that allows users to browse books, manage a cart, place orders, and provides admin functionality to manage inventory. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

---

## 🔥 Features

- 🧑‍💼 User Authentication (Login/Register)
- 🛒 Shopping Cart
- 📦 Order Checkout & History
- 📚 Book Inventory Management (Admin)
- 🧾 View Book Details
- 🎨 Clean & Responsive UI

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS / CSS Modules
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT (JSON Web Tokens)
- **Payment (Optional)**: Stripe Integration
- **API Communication**: RESTful APIs using Axios or Fetch

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js installed
- MongoDB installed and running locally or using MongoDB Atlas
- Git

---

### 📥 Installation

#### 1. Clone the repository

```bash
git clone https://github.com/Navya-2323/Book-store-management-.git
cd Book-store-management-

```

2. Install dependencies
   
Backend:
cd backend
npm install

Frontend:
cd ../frontend
npm install

4. Set up environment variables
Create a .env file in the backend/ folder with:
env:
PORT=5000
MONGO_URI=mongodb://localhost:27017/bookstore
JWT_SECRET=your_jwt_secret_key
Optional: Add .env in frontend/if you're using Vite or React env variables.

5. Run the app
In two separate terminals:

Backend:
cd backend
npm run dev

Frontend:
cd frontend
npm start
Open your browser at: http://localhost:3000

### 🧪 Usage
Register or Login as a user.
Browse available books.
Add books to cart.
Proceed to checkout.
As admin, manage books (Add/Edit/Delete).

### 🗂️ Folder Structure
📦 Book-store-management-
├── 📁 backend
│   ├── 📁 controllers
│   ├── 📁 models
│   ├── 📁 routes
│   ├── 📁 middleware
│   ├── index.js
│   └── .env
├── 📁 frontend
│   ├── 📁 src
│   │   ├── 📁 components
│   │   ├── 📁 pages
│   │   ├── App.js
│   │   └── index.js
├── README.md
