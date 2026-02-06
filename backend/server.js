import express from "express";
import cookieParser from "cookie-parser";
import auth_Route from "./routes/authRoutes.js";
import { connectDB } from "./config/db.js";
import cors from "cors";
import admin_Routes from "./routes/adminRoutes.js";
import user_Routes from "./routes/userRoutes.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

connectDB();

app.use("/api/auth", auth_Route);
app.use("/api/admin", admin_Routes);
app.use("/api/user", user_Routes);

app.listen(4000, () => {
  console.log("server started on http://localhost:4000");
});
