import mongoose from "mongoose";

const authSchema = mongoose.Schema(
  {
    email: String,
    password: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true },
);

export const AuthCollection = mongoose.model("AuthCollection", authSchema);
