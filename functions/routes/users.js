const express = require("express");
const router = express.Router();

// Protected route (access only if authenticated)
router.get("/", (req, res) => {
  res.json({ message: `Hello ${req.user.email}, welcome to the protected user route!` });
});

module.exports = router;
