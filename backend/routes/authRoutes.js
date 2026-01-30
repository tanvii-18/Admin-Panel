import { loginUser, signup, verifyOtp } from "../controllers/authController.js";
import { signinUser, signupUser } from "../middleware/authMiddleware.js";
import express from "express";

const auth_Route = express.Router();

auth_Route.post("/signup", signupUser, signup);
auth_Route.post("/login", signinUser, loginUser);
auth_Route.post("/verify-otp", verifyOtp);

export default auth_Route;
