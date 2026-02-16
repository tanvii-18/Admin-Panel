# Admin Panel – Fullstack MERN Dashboard

A modern Admin Panel built with React and Tailwind CSS for the frontend, and Node.js, Express, and MongoDB for the backend. It provides tools for managing users, employees, and statistics in a single interface. All endpoints have been tested with Postman and Thunder Client.

    MongoDB


    Express.js


    React


    Node.js

## Features

Frontend (React + Tailwind CSS): Responsive UI with interactive dashboard cards displaying statistics such as Total Employees, New Hires, Attendance, Earnings, and Tasks. Easy profile updates and user management.
Backend (Node.js + Express + MongoDB Atlas): Manages CRUD operations and business logic. Supports user updates, OTP verification, secure sign-up and sign-in.
Authentication and Security: OTP verification, JWT authentication, and admin-controlled user management.
API and CORS: Secure data serving with CORS enabled.
Testing: Fully tested with Postman and Thunder Client.

## Tech Stack

FrontendBackendDatabaseToolsReactNode.jsMongoDB AtlasPostmanTailwind CSSExpress.jsMongooseThunder ClientReact HooksJWT Auth—CORS

## Folder Structure

The project is organized into frontend and backend directories for modularity and scalability.

Admin-Panel/
├── frontend/
│ ├── node_modules/ # Dependencies
│ ├── public/ # Static assets (index.html, favicon)
│ ├── src/ # Source code
│ │ ├── assets/ # Images, icons, etc.
│ │ ├── screens/
│ │ │ └── authentication/
│ │ │ ├── SignIn.jsx
│ │ │ ├── SignUp.jsx
│ │ │ └── Verify-otp.jsx
│ │ ├── pages/
│ │ │ ├── AllEmployees.jsx
│ │ │ ├── Dashboard.jsx
│ │ │ ├── Profile.jsx
│ │ │ └── Sidebar-dashboard.jsx
│ │ ├── utils/
│ │ │ ├── apiRoutes.js
│ │ │ └── App.jsx
│ │ ├── index.css
│ │ └── main.jsx
│ ├── .gitignore
│ ├── eslint.config.js
│ ├── index.html
│ ├── package-lock.json
│ ├── package.json
│ ├── README.md
│ └── vite.config.js
│
├── backend/
│ ├── config/ # Config files (DB connections)
│ ├── controllers/
│ │ ├── AdminController.js
│ │ ├── authController.js
│ │ ├── dashBoardController.js
│ │ └── UserController.js
│ ├── middleware/
│ │ └── authMiddleware.js
│ ├── models/
│ │ ├── authModel.js
│ │ ├── dashboardModel.js
│ │ ├── otpModel.js
│ │ └── UserModel.js
│ ├── node_modules/
│ ├── routes/
│ │ ├── AdminRoutes.js
│ │ ├── authRoutes.js
│ │ └── userRoutes.js
│ ├── services/ # Additional services (if any)
│ ├── utils/ # Utilities/helpers
│ ├── .env
│ ├── .gitignore
│ ├── notes.txt
│ ├── package-lock.json
│ ├── package.json
│ └── server.js
│
└── screenshots/ # Project screenshots for README
├── dashboard.png
└── users.png

## UI Screenshot

Screenshot 2026-02-16 091154

## How to Run

Clone the Repository
textgit clone <your-repo-link>
cd Admin-Panel

### Frontend

cd frontend

npm install

npm start

### Backend

cd backend

npm install

nodemon server.js

### Add your MongoDB Atlas URI to the .env file in the backend directory for database connection.

### Test API endpoints using Postman or Thunder Client.

### For issues or contributions, open an issue or submit a pull request.
