const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { authMiddleware } = require("./middleware/auth");
require("dotenv").config();

// Initialize express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
const userRoutes = require("./routes/users");
const authController = require("./controllers/authController");

// Secure routes with JWT Auth middleware
app.use("/users", authMiddleware, userRoutes);

// Public route for login
app.use("/login", authController.login);

// Fallback for undefined routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Export the app for Netlify Lambda
module.exports = app;
