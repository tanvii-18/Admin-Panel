import mongoose from "mongoose";

const users = mongoose.Schema(
  {
    name: String,
    emp_id: String,
    phone: String,
    role: {
      type: String,
      enum: ["Admin", "Manager", "Employee"],
      default: "Employee",
    },
    joining_date: Date,
    salary: Number,
    education: String,
    exp: String,
    department: String,
    profile_pic: String,
    address: String,
  },
  { timestamps: true },
);

export const User = mongoose.model("users", users);
