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

#### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-github-username>/BiblioHub.git
cd BiblioHub
```

#### 2️⃣ Install dependencies
**Backend And Frontend**
```bash
npm install

//This will install both backend and frontend dependencies, assuming your package.json includes the necessary packages.
```



#### 3️⃣ Set up environment variables
Create a **.env** file inside the `backend/` folder:
```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/bibliohub
JWT_SECRET=your_jwt_secret_key
```

*(Optional)* Add `.env` in `frontend/` if using Vite or React environment variables
VITE_API_URL=http://localhost:5000.

#### 4️⃣ Run the app
Open **two terminals**:

**Backend**
```bash
 
npm run dev
```

**Frontend**
```bash
 
npm run client
```

Visit 👉 http://localhost:5173
 (Vite default port) to access the frontend.

---

## 🧪 Usage
1. Register or Login as a user.  
2. Browse available books.  
3. Add books to cart.  
4. Proceed to checkout.  
5. Admins can manage books (Add / Edit / Delete).  

---

## 🗂️ Folder Structure
```plaintext
📦 BiblioHub
├── 📁 backend
│   ├── 📁 controllers
│   ├── 📁 models
│   ├── 📁 routes
│   ├── 📁 middleware
│   ├── index.js
│   └── .env
├── 📁 frontend
│   ├── 📁 public
│   ├── 📁 src
│   │   ├── 📁 components
│   │   ├── 📁 pages
│   │   ├── App.js
│   │   └── index.js
└── README.md
```

---