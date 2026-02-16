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

Frontend Folder Structure
FRONTEND
├── node_modules/ # Dependencies (npm installs)
├── public/ # Static assets
│ └── ... # (e.g., index.html, favicon)
├── src/ # Source code
│ ├── assets/ # Images, icons, etc.
│ ├── screens/ # Authentication screens
│ │ ├── authentication/
│ │ │ ├── SignIn.jsx # Login page
│ │ │ ├── SignUp.jsx # Registration page
│ │ │ └── Verify-otp.jsx # OTP verification
│ ├── pages/ # Main app pages
│ │ ├── AllEmployees.jsx # Employee list
│ │ ├── Dashboard.jsx # Main dashboard
│ │ ├── Profile.jsx # User profile
│ │ └── Sidebar-dashboard.jsx # Sidebar component
│ ├── utils/ # Utilities
│ │ ├── apiRoutes.js # API endpoint definitions
│ │ └── App.jsx # Root app component
│ ├── index.css # Global styles
│ ├── main.jsx # Entry point
│ └── ... # Other components/hooks
├── .gitignore # Git ignore file
├── eslint.config.js # ESLint config
├── index.html # HTML template
├── package-lock.json # Lockfile
├── package.json # Project metadata
├── README.md # Frontend docs
└── vite.config.js # Vite build config

## Backend Folder Structure

BACKEND
├── config/ # Config files
│ └── ... # (e.g., db connections)
├── controllers/ # Business logic handlers
│ ├── AdminController.js # Admin ops
│ ├── authController.js # Auth endpoints
│ ├── dashBoardController.js # Dashboard data
│ └── UserController.js # User management
├── middleware/ # Middleware functions
│ └── authMiddleware.js # Auth checks
├── models/ # MongoDB schemas
│ ├── authModel.js # Auth model
│ ├── dashboardModel.js # Dashboard model
│ ├── otpModel.js # OTP model
│ └── UserModel.js # User model
├── node_modules/ # Dependencies
├── routes/ # API routes
│ ├── AdminRoutes.js # Admin routes
│ ├── authRoutes.js # Auth routes
│ └── userRoutes.js # User routes
├── services/ # Additional services
│ └── ... # (if any)
├── utils/ # Utilities
│ └── ... # (e.g., helpers)
├── .env # Environment variables
├── .gitignore # Git ignore file
├── notes.txt # Dev notes
├── package-lock.json # Lockfile
├── package.json # Project metadata
└── server.js # Server entry point

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
