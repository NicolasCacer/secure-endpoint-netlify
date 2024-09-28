const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  const { email, password } = req.body;

  // In a real scenario, verify email/password here
  if (email === "admin@example.com" && password === "password123") {
    const accessToken = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });

    return res.status(200).json({
      message: "Logged in successfully",
      accessToken
    });
  }

  return res.status(403).json({ message: "Invalid email or password" });
};
