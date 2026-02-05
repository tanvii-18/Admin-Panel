import { User } from "../models/userModel";

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
    await UserCollection.updateOne(
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

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({ status: true, message: "User Fetched Successfully ", users });
  } catch (err) {
    res.json({ status: false, message: "Cant get users!", users: [] });
  }
};

export const getUserById = async (req, res) => {
  const id = req.query.id;
  console.log(id);
  try {
    const user = await User.findById(id);
    return res.json({
      status: true,
      message: "user fetched successfully!",
      user,
    });
  } catch (err) {
    return res.json({ status: false, message: err.message });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.query.id;
  try {
    await User.findByIdAndDelete(id);
    return res.json({
      status: true,
      message: "user Deleted Successfully!",
    });
  } catch (err) {
    console.log(err.message);
    return res.json({ status: false, message: err.message });
  }
};
