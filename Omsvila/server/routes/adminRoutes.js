// const express = require("express");
// const router = express.Router();
// const Order = require("../models/Order");
// const Product = require("../models/Product");
// const Customer = require("../models/Customer");

// // ❌ Removed: const verifyAdmin = require("../middleware/verifyAdmin");

// // ✅ No middleware - directly allow access
// router.get("/dashboard", async (req, res) => {
//   try {
//     const totalProducts = await Product.countDocuments();
//     const totalOrders = await Order.countDocuments();
//     const totalCustomers = await Customer.countDocuments();
//     const revenueData = await Order.aggregate([
//       { $group: { _id: null, total: { $sum: "$amount" } } },
//     ]);

//     res.json({
//       totalProducts,
//       totalOrders,
//       totalCustomers,
//       revenue: revenueData[0]?.total || 0,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch dashboard data" });
//   }
// });

// module.exports = router;
const express = require("express");
const router = express.Router();

const Order = require("../models/Order");
const Product = require("../models/Product");
const Customer = require("../models/Customer");

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
    console.error("❌ Dashboard Error:", error);  // Add this line
    res.status(500).json({ message: "Failed to fetch dashboard data" });
  }
});
// Dummy admin dashboard data
// router.get("/dashboard", (req, res) => {
//   res.json({
//     totalProducts: 5,
//     totalOrders: 10,
//     totalCustomers: 7,
//     revenue: 25000
//   });
// });


module.exports = router;
