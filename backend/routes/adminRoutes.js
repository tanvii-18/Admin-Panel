import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUserById,
  updateAdminProfile,
  updateUserByAdmin,
} from "../controllers/adminController.js";
import {
  createDashboard,
  getDashboard,
} from "../controllers/dashBoardController.js";

const admin_Routes = express.Router();

admin_Routes.get("/get-all-users", getAllUsers);
admin_Routes.get("/dashboard", getDashboard);
admin_Routes.get("/get-user-by-id", getUserById);

admin_Routes.post("/dashboard", createDashboard);
admin_Routes.put("/update-admin-profile", updateAdminProfile);
admin_Routes.put("/update-user-profile", updateUserByAdmin);
admin_Routes.delete("/delete-user", deleteUser);

export default admin_Routes;
