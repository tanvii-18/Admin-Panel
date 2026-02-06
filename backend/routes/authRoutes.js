import {
  changePassword,
  forgetPassword,
  getCurrentUser,
  loginUser,
  signup,
  verifyOtp,
  verifyOtpForgetPass,
} from "../controllers/authController.js";
import { signinUser, signupUser } from "../middleware/authMiddleware.js";
import express from "express";

const auth_Route = express.Router();

auth_Route.get("/getCurrentUser", getCurrentUser);

auth_Route.post("/signup", signupUser, signup);
auth_Route.post("/signin", signinUser, loginUser);
auth_Route.post("/verify-otp", verifyOtp);
auth_Route.post("/forget-password", forgetPassword);
auth_Route.post("/verify-forget-password", verifyOtpForgetPass);
auth_Route.post("/change-password", changePassword);

export default auth_Route;
