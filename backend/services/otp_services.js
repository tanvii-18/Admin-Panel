import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { otpCollection } from "../models/otpModel.js";
import { generateOtp } from "../utils/global_functions.js";

dotenv.config();

export const transporter = nodemailer.createTransport({
  service: "gamil",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

export const otpSend = async (email) => {
  const otp = generateOtp();
  const expiryAt = new Date(Date.now() + 120000);
  try {
    await otpCollection.create({ email, otp, expiryAt });
    transporter.sendMail({
      from: `OTP <${process.env.EMAIL}>`,
      to: email,
      subject: "Admin Panel OTP!!",
      text: `your OTP is ${otp}. expires in 2 mins.`,
    });
  } catch (error) {
    return res.json({ status: false, message: error.message });
    console.log("error in sending otp.");
  }
};
