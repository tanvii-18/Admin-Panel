import { AuthCollection } from "../models/authModel.js";
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import { sendOTP } from "../services/otp_services.js";
import { otpCollection } from "../models/otpModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

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

export const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const otpRecord = await otpCollection.findOne({ email, otp });

    // comparing otp with database otp

    if (!otpRecord) {
      return res.status(400).json({ status: false, message: "OTP not found." });
    }

    if (otpRecord.otp !== otp) {
      return res.status(400).json({ status: false, message: "Incorrect OTP." });
    }

    if (otpRecord.expiryAt < new Date(Date.now())) {
      return res.status(400).json({ status: false, message: "OTP expired." });
    }

    await otpCollection.deleteMany({ email });

    const user = await AuthCollection.findOne({ email });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.SECRET_KEY,
      {
        expiresIn: "1d",
      },
    );
    res.cookie("auth_token", token, {
      maxAge: 1000 * 60 * 60 * 24,
      sameSite: "strict",
      httpOnly: true,
    });

    res.json({
      status: true,
      message: "OTP is verified & Signin successfully !",
    });
  } catch (error) {
    // console.log("Catch block", error);

    return res
      .status(500)
      .json({ status: false, message: "OTP Verification Failed!" });
  }
};

// change password

export const changePassword = async (req, res) => {
  const { email, password, newPassword } = req.body;

  try {
    const user = await AuthCollection.findOne({ email });

    // comparing database password & user entered password
    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      return res
        .status(400)
        .json({ status: false, message: "Incorrect Password!" });
    }

    // new password hasing
    const hasedpassword = await bcrypt.hash(newPassword, 12);

    await AuthCollection.updateOne(
      { email },
      { $set: { newPassword: hasedpassword } },
    );

    res
      .status(200)
      .json({ status: true, message: "Password Changed Successfully!" });
  } catch (error) {
    // console.log("Catch block", error);
    return res
      .status(500)
      .json({ status: false, message: "Password Can't Change." });
  }
};

// forgot password

export const forgotPassword = (req, res) => {
  const {} = req.body;

  try {
  } catch (error) {
    // console.log("Catch block", error);
    return res
      .status(500)
      .json({ status: false, message: "Password Can't Change." });
  }
};
