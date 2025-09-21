# 📚 BiblioHub
A full-stack JavaScript web application that allows users to browse books, manage a cart, place orders, and provides admin functionality to manage inventory.  
Built using the **MERN** stack (MongoDB, Express.js, React.js, Node.js).

---

## 🔥 Features
- 🧑‍💼 **User Authentication** (Login / Register)
- 🛒 **Shopping Cart**
- 📦 **Order Checkout & History**
- 📚 **Book Inventory Management (Admin)**
- 🧾 **View Book Details**
- 🎨 **Clean & Responsive UI**

---

## 🛠️ Tech Stack
| Layer      | Technology                          |
|------------|--------------------------------------|
| Frontend   | React.js, Tailwind CSS / CSS Modules |
| Backend    | Node.js, Express.js                  |
| Database   | MongoDB (Mongoose)                   |
| Auth       | JWT (JSON Web Tokens)                |
| API Calls  | RESTful APIs using Axios / Fetch     |
| Optional   | Stripe (Payment Integration)         |

---

## 🚀 Getting Started

### ✅ Prerequisites
- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) running locally or Atlas account
- [Git](https://git-scm.com/) installed

### 📥 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/NAVYASHREE-N/BiblioHub.git
   cd BiblioHub
Install dependencies

Backend

bash
Copy code
cd backend
npm install
Frontend

bash
Copy code
cd ../frontend
npm install
Set up environment variables

Create a .env file inside the backend/ folder:

ini
Copy code
PORT=5000
MONGO_URI=mongodb://localhost:27017/bibliohub
JWT_SECRET=your_jwt_secret_key
If using Vite or React env variables for frontend, create a .env inside frontend/ as needed.

Run the app

Open two terminals:

Backend

bash
Copy code
cd backend
npm run dev
Frontend

bash
Copy code
cd frontend
npm run dev   # or npm start if CRA
Visit the frontend at http://localhost:5173 (Vite default).

🧪 Usage
Register or Login as a user

Browse available books

Add books to cart

Proceed to checkout

As an admin, manage books (Add / Edit / Delete)

🗂️ Folder Structure
css
Copy code
BiblioHub
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── index.js
│   └── .env
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.jsx
│   │   └── main.jsx
├── README.md
└── package.json
