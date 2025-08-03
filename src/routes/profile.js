const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Auth middleware
function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token missing" });

  jwt.verify(token, process.env.JWT_SECRET || "secret", (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
}

// Protected route
router.get("/", verifyToken, (req, res) => {
  const mockProfile = {
    id: req.user.id,
    email: req.user.email,
    bio: "Guitarist and singer from Kigali",
    interests: ["Afrobeats", "Live Shows"],
    profilePhoto: "default.jpg"
  };
  res.json(mockProfile);
});

module.exports = router;
