import { User } from "../models/userModel.js";

//* Update Profile By user
export const updateProfileByUser = async (req, res) => {
  const {
    email,
    name,
    joining_date,
    profile_pic,
    phone,
    education,
    exp,
    address,
  } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ status: false, message: "User not found!" });
    }
    await User.updateOne(
      { email },
      {
        $set: {
          name,
          joining_date,
          profile_pic,
          phone,
          education,
          exp,
          address,
        },
      },
    );
    res.json({ status: true, message: "profile updated successfully!" });
  } catch (err) {
    return res.json({ status: false, message: err.message });
  }
};
