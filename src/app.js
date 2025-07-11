const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); // Charge les variables d'environnement

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Welcome to ZIKNET API!");
});

module.exports = app;
