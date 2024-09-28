const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];  // Extract the token from Bearer scheme

  if (!token) {
    return res.status(401).json({ message: "Token missing, access denied" });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Token is invalid" });

    req.user = user; // Attach the user to request for further use
    next(); // Continue to the route handler
  });
};
