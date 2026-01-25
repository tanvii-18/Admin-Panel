import mongoose from "mongoose";

const users = mongoose.Schema(
  {
    name: String,
    emp_id: String,
    phone: String,
    role: String,
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
