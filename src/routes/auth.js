const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

// In-memory user store (mock)
const users = [];

// Register
router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "Email and password required" });

  const userExists = users.find(u => u.email === email);
  if (userExists)
    return res.status(409).json({ message: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = { id: users.length + 1, email, password: hashedPassword };
  users.push(newUser);

  // Generate token for new user
  const token = jwt.sign(
    { id: newUser.id, email: newUser.email },
    process.env.JWT_SECRET || "secret",
    { expiresIn: "1h" }
  );

  res.status(201).json({
    message: "User registered successfully",
    token: token
  });
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword)
    return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET || "secret",
    { expiresIn: "1h" }
  );

  res.json({ token });
});

module.exports = router;
