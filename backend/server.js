import express from "express";
import cookieParser from "cookie-parser";
import auth_Route from "./routes/authRoutes.js";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", auth_Route);

app.listen(4000, () => {
  console.log("server started on http://localhost:4000");
});
