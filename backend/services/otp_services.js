import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { generateOtp } from "../utils/global_functions";
import { otpCollection } from "../models/otpModel";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

export const sendOTP = async (email) => {
  const otp = generateOtp();
  const expiryAt = new Date(Date.now() + Number(120000));

  try {
    await otpCollection.create({ email, otp, expiryAt });

    await transporter.sendMail({
      from: `Admin Panel <${process.env.EMAIL}>`,
      to: email,
      subject: "Admin Panel Login OTP",
      text: `Your OTP is ${otp}.valid upto 2 mins.`,
    });
  } catch (error) {
    console.log("Can't Send OTP!", error.message);
  }
};
