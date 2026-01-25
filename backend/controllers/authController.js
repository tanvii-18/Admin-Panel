import { AuthCollection } from "../models/authModel";

export const signup = (req, res) => {
  const { email, password } = req.body;
  try {
    const hashed = bcrypt.hash(password, 12);
  } catch (error) {
    res.json({ status: false, message: "Can't Register User!" });
    console.log(error);
  }
};
