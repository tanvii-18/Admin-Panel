import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUserById,
  updateAdminProfile,
  updateUserByAdmin,
} from "../controllers/adminController.js";

const admin_Routes = express.Router();

admin_Routes.get("/get-all-users", getAllUsers);
admin_Routes.get("/get-user-by-id", getUserById);
admin_Routes.post("/update-admin-profile", updateAdminProfile);
admin_Routes.post("/update-user-profile", updateUserByAdmin);
admin_Routes.delete("/delete-user", deleteUser);

export default admin_Routes;
