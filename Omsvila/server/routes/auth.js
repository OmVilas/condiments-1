const express = require("express");
const router = express.Router();

// Dummy admin credentials
const adminEmail = "admin@example.com";
const adminPassword = "admin123";

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === adminEmail && password === adminPassword) {
    res.json({ message: "Login successful", role: "admin" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

module.exports = router;
