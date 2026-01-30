import express from "express";
import cookieParser from "cookie-parser";
import auth_Route from "./routes/authRoutes.js";
import { connectDB } from "./config/db.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173/", credentials: true }));

connectDB();

app.use("/api/auth", auth_Route);

app.listen(4000, () => {
  console.log("server started on http://localhost:4000");
});
