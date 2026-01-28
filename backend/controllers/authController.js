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

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = AuthCollection.findOne({ email });

    if (!existingUser) {
      res.json({ status: false, message: "User Not Found!" });
    }

    const isMatched = await bcrypt.compare(password, existingUser.password);

    if (!isMatched) {
      res.json({ status: false, message: "Incorrect Password!" });
    }

    const isOtpSend = await otpSend(email);

    res.json(isOtpSend);
  } catch (error) {
    console.log(error);
    return res.json({ status: false, message: error.message });
  }
};
