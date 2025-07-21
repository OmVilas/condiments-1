// routes/orderRoutes.js
import express from "express";
import {
  placeOrder,
  getUserOrders,
  getAllOrders,
  updateOrderStatus,
} from "../controllers/orderController.js";

const router = express.Router();

// 📦 Place an order
router.post("/", placeOrder);

// 👤 Get orders by userId
router.get("/user/:userId", getUserOrders);

// 🛠️ Admin: Get all orders
router.get("/", getAllOrders);

// 🛠️ Admin: Update order status
router.put("/:orderId/status", updateOrderStatus);

export default router;
