import { login, signup } from "../controllers/authController.js";
import { signupUser } from "../middleware/authMiddleware.js";
import express from "express";

const auth_Route = express.Router();

auth_Route.post("/signup", signupUser, signup);
auth_Route.post("/login", login);

export default auth_Route;
