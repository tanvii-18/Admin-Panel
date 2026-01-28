import { AuthCollection } from "../models/authModel.js";
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import { otpSend } from "../services/otp_services.js";

export const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashed = await bcrypt.hash(password.toString(), 12);

    await AuthCollection.create({ email, password: hashed });

    await User.create({ email });

    res.json({ status: true, message: "User Registered Successfully!" });
  } catch (error) {
    return res.json({
      status: false,
      message: "Can't Register User!",
      error: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await AuthCollection.findOne({ email });
  } catch (error) {
    return res.json({ status: false, message: error.message });
  }
};
