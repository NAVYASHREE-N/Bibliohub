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

   git clone https://github.com/NAVYASHREE-N/BiblioHub.git
   cd BiblioHub
   
Install dependencies

Backend

cd backend
npm install

Frontend

cd ../frontend
npm install

Set up environment variables

Create a .env file inside the backend/ folder:

PORT=5000
MONGO_URI=mongodb://localhost:27017/bibliohub
JWT_SECRET=your_jwt_secret_key
If using Vite or React env variables for frontend, create a .env inside frontend/ as needed.

Run the app

Open two terminals:

Backend

cd backend
npm run dev

Frontend

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
BiblioHub/
├── backend/                 # Node.js + Express server
│   ├── config/              # Database & server config
│   │   └── db.js
│   ├── controllers/         # Route controllers (book, user, order)
│   │   ├── authController.js
│   │   ├── bookController.js
│   │   └── orderController.js
│   ├── middleware/          # JWT auth, error handling
│   │   ├── authMiddleware.js
│   │   └── errorHandler.js
│   ├── models/              # Mongoose schemas
│   │   ├── Book.js
│   │   ├── Order.js
│   │   └── User.js
│   ├── routes/              # API endpoints
│   │   ├── authRoutes.js
│   │   ├── bookRoutes.js
│   │   └── orderRoutes.js
│   ├── utils/               # Helper utilities
│   │   └── generateToken.js
│   ├── .env                 # Environment variables (ignored in git)
│   ├── index.js             # Server entry point
│   ├── package.json
│   └── README.md            # (optional backend-specific README)

├── frontend/                # React + Vite client
│   ├── public/              # Static files, favicon, etc.
│   │   └── vite.svg
│   ├── src/
│   │   ├── assets/          # Images, fonts, global styles
│   │   ├── components/      # Reusable UI components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── pages/           # Page-level components
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── BookList.jsx
│   │   │   ├── Checkout.jsx
│   │   │   └── OrderHistory.jsx
│   │   ├── App.jsx          # App entry component
│   │   └── main.jsx         # Vite entry point
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js   # Tailwind setup
│   ├── vite.config.js
│   └── README.md            # (optional frontend-specific README)

├── .gitignore               # Common ignores (node_modules, dist, .env, etc.)
├── package.json             # Root-level scripts if you keep one
└── README.md                # Main project README
