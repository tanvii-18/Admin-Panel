# Admin Panel – Fullstack MERN Dashboard

A modern Admin Panel built with React and Tailwind CSS for the frontend, and Node.js, Express, and MongoDB for the backend. It provides tools for managing users, employees, and statistics in a single interface. All endpoints have been tested with Postman and Thunder Client.

## 🛠 Tech Stack

Frontend: React, Tailwind CSS, React Hooks
Backend: Node.js, Express.js, Mongoose
Database: MongoDB Atlas
Tools: Postman, Thunder Client, JWT Auth, CORS

## ✨ Features

Frontend (React + Tailwind CSS):

Responsive UI with interactive dashboard cards displaying statistics such as Total Employees, New Hires, Attendance, Earnings, and Tasks.

Easy profile updates and user management.

Backend (Node.js + Express + MongoDB Atlas):

Manages CRUD operations and business logic.

Supports user updates, OTP verification, secure sign-up, and sign-in.

Authentication & Security:

OTP verification and JWT authentication.

Admin-controlled user management.

API & CORS:

Secure data serving with CORS enabled.

### Testing:

Fully tested with Postman and Thunder Client.

## 📂 Folder Structure

Admin-Panel/
├── frontend/
│   ├── node_modules/             # Dependencies
│   ├── public/                   # Static assets (index.html, favicon)
│   ├── src/                      # Source code
│   │   ├── assets/               # Images, icons, etc.
│   │   ├── screens/
│   │   │   └── authentication/
│   │   │       ├── SignIn.jsx
│   │   │       ├── SignUp.jsx
│   │   │       └── Verify-otp.jsx
│   │   ├── pages/
│   │   │   ├── AllEmployees.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── Sidebar-dashboard.jsx
│   │   ├── utils/
│   │   │   ├── apiRoutes.js
│   │   │   └── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
│
├── backend/
│   ├── config/                   # Config files (DB connections)
│   ├── controllers/
│   │   ├── AdminController.js
│   │   ├── authController.js
│   │   ├── dashBoardController.js
│   │   └── UserController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── authModel.js
│   │   ├── dashboardModel.js
│   │   ├── otpModel.js
│   │   └── UserModel.js
│   ├── node_modules/
│   ├── routes/
│   │   ├── AdminRoutes.js
│   │   ├── authRoutes.js
│   │   └── userRoutes.js
│   ├── services/                 # Additional services (if any)
│   ├── utils/                    # Utilities/helpers
│   ├── .env
│   ├── .gitignore
│   ├── notes.txt
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
└── screenshots/                  # Project screenshots
    ├── dashboard.png
    └── users.png

## 🖼 UI Screenshot

### 🚀 How to Run

Clone the repository:

git clone https://github.com/tanvii-18/Admin-Panel
cd Admin-Panel

### Frontend:

cd frontend

npm install

npm start

### Backend:

cd backend

npm install

nodemon server.js


Add your MongoDB Atlas URI to the .env file in the backend directory.

Test API endpoints using Postman or Thunder Client.
