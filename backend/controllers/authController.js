import { AuthCollection } from "../models/authModel.js";
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";

export const signup = (req, res) => {
  const { email, password } = req.body;
  try {
    const hashed = bcrypt.hash(password, 12);

    AuthCollection.create({ email, password: hashed });

    User.create({ email });

    res.json({ status: true, message: "User Registered Successfully!" });
  } catch (error) {
    res.json({ status: false, message: "Can't Register User!" });
    console.log(error);
  }
};
