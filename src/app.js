const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import and use your routes
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

// Default test route
app.get("/", (req, res) => {
  res.send("Welcome to ZIKNET API!");
});

module.exports = app;
