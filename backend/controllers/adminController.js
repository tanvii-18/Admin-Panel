import { User } from "../models/userModel.js";

export const updateAdminProfile = async (req, res) => {
  const {
    _id,
    name,
    role,
    emp_id,
    joining_date,
    department,
    salary,
    profile_pic,
    phone,
    education,
    experience,
    address,
  } = req.body;

  if (!_id) {
    return res.json({ status: false, message: "User ID is required!" });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      _id,
      {
        $set: {
          name,
          role,
          emp_id,
          joining_date,
          department,
          salary,
          profile_pic,
          phone,
          education,
          experience,
          address,
        },
      },
      { new: true },
    );

    if (!updatedUser) {
      return res.json({ status: false, message: "User not found!" });
    }

    res.json({
      status: true,
      message: "Profile updated successfully!",
      user: updatedUser,
    });
  } catch (err) {
    return res.json({ status: false, message: err.message });
  }
};

export const updateUserByAdmin = async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { email: req.body.email },
      { $set: req.body },
      { new: true },
    );

    if (!updatedUser) {
      return res.json({ status: false, message: "User not found!" });
    }

    res.json({
      status: true,
      message: "User profile updated successfully!",
      user: updatedUser,
    });
  } catch (err) {
    res.json({ status: false, message: err.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({ status: true, message: "Users fetched successfully", users });
  } catch (err) {
    res.json({ status: false, message: "Can't get users!", users: [] });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.query;
  try {
    const user = await User.findById(id);
    if (!user) return res.json({ status: false, message: "User not found" });
    res.json({ status: true, message: "User fetched successfully!", user });
  } catch (err) {
    res.json({ status: false, message: err.message });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.query;
  try {
    await User.findByIdAndDelete(id);
    res.json({ status: true, message: "User deleted successfully!" });
  } catch (err) {
    res.json({ status: false, message: err.message });
  }
};
