import { AuthCollection } from "../models/authModel.js";
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import { sendOTP } from "../services/otp_services.js";

export const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await AuthCollection.findOne({ email });

    if (user) {
      return res
        .status(409)
        .json({ status: false, message: "User already exists.Please Login!" });
    }

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

    if (!user) {
      return res
        .status(404)
        .json({ status: false, message: "User Not Found!" });
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      return res
        .status(401)
        .json({ status: false, message: "Invalid Password!" });
    }

    const otp = await sendOTP(email);

    res
      .status(200)
      .json({ status: true, message: "OTP Send Successfully!", otp });
  } catch (error) {
    return res.json({ status: false, message: error.message });
  }
};

//* otp verification

export const verifyOtp = (reqq, res) => {};
