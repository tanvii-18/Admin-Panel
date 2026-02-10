import express from "express";
import { updateProfileByUser } from "../controllers/userController.js";

const user_Routes = express.Router();

user_Routes.post("/update-profil-by-user", updateProfileByUser);

export default user_Routes;
