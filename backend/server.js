import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/");

app.listen(4000, () => {
  console.log("server started on http://localhost:4000");
});    
