import mongoose from "mongoose";

const otpSchema = new mongoose.Schema(
  {
    otp: Number,
    email: String,
    expiryAt: Date,
  },
  { timestamps: true },
);

export const otpCollection = mongoose.model("otp", otpSchema);
