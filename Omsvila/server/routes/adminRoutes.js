const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const Product = require("../models/Product");
const Customer = require("../models/Customer");

// ❌ Removed: const verifyAdmin = require("../middleware/verifyAdmin");

// ✅ No middleware - directly allow access
router.get("/dashboard", async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();
    const totalOrders = await Order.countDocuments();
    const totalCustomers = await Customer.countDocuments();
    const revenueData = await Order.aggregate([
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    res.json({
      totalProducts,
      totalOrders,
      totalCustomers,
      revenue: revenueData[0]?.total || 0,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch dashboard data" });
  }
});

module.exports = router;
