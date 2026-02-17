# 🚀 Admin Panel – Full Stack MERN Dashboard

This Admin Panel is a scalable MERN stack application designed for managing users, employees, and attendance efficiently. It implements secure JWT authentication, role-based access control, and a clean, modern dashboard interface for streamlined administration.

## 🛠 Tech Stack

<p align="center">

<a href="https://react.dev/">
  <img src="https://img.shields.io/badge/React-0D1117?style=for-the-badge&logo=react&logoColor=61DAFB" />
</a>

<a href="https://reactrouter.com/">
  <img src="https://img.shields.io/badge/React_Router-0D1117?style=for-the-badge&logo=reactrouter&logoColor=CA4245" />
</a>

<a href="https://tailwindcss.com/">
  <img src="https://img.shields.io/badge/TailwindCSS-0D1117?style=for-the-badge&logo=tailwind-css&logoColor=38BDF8" />
</a>

<a href="https://nodejs.org/">
  <img src="https://img.shields.io/badge/Node.js-0D1117?style=for-the-badge&logo=node.js&logoColor=3C873A" />
</a>

<a href="https://expressjs.com/">
  <img src="https://img.shields.io/badge/Express-0D1117?style=for-the-badge&logo=express&logoColor=white" />
</a>

<a href="https://www.mongodb.com/">
  <img src="https://img.shields.io/badge/MongoDB-0D1117?style=for-the-badge&logo=mongodb&logoColor=47A248" />
</a>

<a href="https://mongoosejs.com/">
  <img src="https://img.shields.io/badge/Mongoose-0D1117?style=for-the-badge&logo=mongoose&logoColor=880000" />
</a>

<a href="https://jwt.io/">
  <img src="https://img.shields.io/badge/JWT-0D1117?style=for-the-badge&logo=jsonwebtokens&logoColor=white" />
</a>

<a href="https://www.mongodb.com/atlas">
  <img src="https://img.shields.io/badge/MongoDB_Atlas-0D1117?style=for-the-badge&logo=mongodb&logoColor=00ED64" />
</a>

<a href="https://www.postman.com/">
  <img src="https://img.shields.io/badge/Postman-0D1117?style=for-the-badge&logo=postman&logoColor=FF6C37" />
</a>

</p>

## UI Preview ✨

<p align="center">
  <a href="login">
  <img width="49%" alt="Screenshot 2026-02-16 235729" src="https://github.com/user-attachments/assets/2f503365-01d1-4fc4-86d9-b89b0036586c" />
  </a>
  <a href="dashboard">
    <img width="49%" alt="Screenshot 2026-02-16 234041" src="https://github.com/user-attachments/assets/f7320886-d77e-4b24-b677-50085851a4ea" />
  </a>
</p>



## 📁 Project Structure

```
admin-panel/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── context/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── tailwind.config.js
```

## 🔥 Features

Secure JWT Authentication

Role-Based Access (Admin / Employee)

Add / Edit / Delete Employees

Attendance Management

Dashboard Analytics Cards

Protected Routes

Responsive UI

## 🔐 Authentication Flow

User logs in

Server generates JWT token

Token stored in HTTP-only cookie

Protected routes verified via middleware
