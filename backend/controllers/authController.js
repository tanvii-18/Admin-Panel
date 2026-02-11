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
        .status(400)
        .json({ status: false, message: "Incorrect Password!" });
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
    console.log("Catch block", error);

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
      { $set: { password: hasedpassword } },
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

export const forgetPassword = async (req, res) => {
  const { email } = req.body;
  const user = await AuthCollection.findOne({ email });
  if (!user) {
    return res.status(404).json({ status: false, message: "user not found !" });
  }
  const isOtpSent = await sendOTP(email);
  res.json(isOtpSent);
};

export const verifyOtpForgetPass = async (req, res) => {
  const { email, otp, newPassword } = req.body;
  try {
    const record = await otpCollection.findOne({ email, otp });
    if (!record) {
      return res.json({ status: false, message: "Incorrect Otp!" });
    }
    if (record.expiryAt < new Date(Date.now())) {
      return res.json({ status: false, message: "otp is expired!" });
    }
    const hashed = await bcrypt.hash(newPassword, 12);
    await AuthCollection.updateOne(
      { email },
      {
        $set: {
          password: hashed,
        },
      },
    );
    return res.json({
      status: false,
      message: "password updated successfully!",
    });
  } catch (err) {
    return res.json({ status: false, message: "Password can't updated!" });
  }
};

export const getCurrentUser = async (req, res) => {
  try {
    const token = req.cookies.auth_token;
    const decoded = jwt.verify(token, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    if (decoded) {
      const user = await AuthCollection.findById(decoded._doc._id).populate(
        "user",
        "-createdAt -__v -updatedAt",
      );
      return res.json({
        status: true,
        message: "Current user fetched successfully !",
        user,
      });
    } else {
      return res.json({ status: false, message: "cant get current user !" });
    }
  } catch (err) {
    return res.json({ status: false, message: err.message });
  }
};

// Sign Out
export const signout = (req, res) => {
  try {
    res.clearCookie("auth_token", {
      maxAge: 1000 * 60 * 60 * 24,
      sameSite: "strict",
      httpOnly: true,
    });
    res.json({ status: true, message: "signout successfully!" });
  } catch (err) {
    res.json({ status: false, message: "signout failed!" });
  }
};
