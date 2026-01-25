export const signupUser = (req, res, next) => {
  const { email, password } = req.body;

  if (!email) {
    return res.json({ status: false, message: "Email Requires!" });
  }

  if (!password) {
    return res.json({ status: false, message: "Email Requires!" });
  }

  next();
};
