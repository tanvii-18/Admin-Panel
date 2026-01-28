export const signupUser = (req, res, next) => {
  const { email, password } = req.body;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    return res.json({ status: false, message: "Email Requires!" });
  }

  if (!emailRegex.test(email)) {
    return res
      .status(400)
      .json({ status: false, message: "Invalid email format..." });
  }

  if (!password) {
    return res.json({ status: false, message: "Password Requires!" });
  }

  if (password.length < 8) {
    return res.status(400).json({
      status: false,
      message: "Password should be 8 Characters long!",
    });
  }

  next();
};

export const signinUser = (req, res, next) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ status: false, message: "Email Requires!" });
  }

  if (!password) {
    return res
      .status(400)
      .json({ status: false, message: "Password Requires!" });
  }

  next();
};
