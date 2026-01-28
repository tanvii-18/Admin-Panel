import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_URL);
    // console.log(process.env.ATLAS_URL);
    console.log("mongoDB Connected!");
  } catch (error) {
    console.log("error in connecting MongoDB!", error.message);
  }
};
