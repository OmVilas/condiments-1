import express from "express";
const router = express.Router();

// Hardcoded admin credentials for now
const adminEmail = "admin@example.com";
const adminPassword = "admin123";

router.post("/", (req, res) => {
  const { email, password } = req.body;

  if (email === adminEmail && password === adminPassword) {
    return res.json({ message: "Login successful", role: "admin" });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
});

export default router;
