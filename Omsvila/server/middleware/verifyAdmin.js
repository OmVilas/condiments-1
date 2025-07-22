// middleware/verifyAdmin.js
const jwt = require("jsonwebtoken");

const verifyAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      if (decoded.role === "admin") {
        req.user = decoded;
        next();
      } else {
        res.status(403).json({ message: "Access denied. Not an admin." });
      }
    } catch (err) {
      res.status(401).json({ message: "Invalid token." });
    }
  } else {
    res.status(401).json({ message: "No token provided." });
  }
};

module.exports = verifyAdmin;
