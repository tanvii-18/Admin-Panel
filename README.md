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

## 🖼 UI Screenshot

<img width="1894" height="821" alt="Screenshot 2026-02-16 091154" src="https://github.com/user-attachments/assets/e7dc40f5-ccb8-4587-a853-8f8593934e96" />


### 🚀 How to Run

#### Clone the repository:

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
