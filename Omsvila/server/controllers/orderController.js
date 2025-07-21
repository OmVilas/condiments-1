// controllers/orderController.js
import Order from "../models/Order.js";

// Create/place a new order
export const placeOrder = async (req, res) => {
  const { userId, products, shippingAddress, totalAmount } = req.body;

  try {
    const newOrder = new Order({
      userId,
      products,
      shippingAddress,
      totalAmount,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json({ message: "Order placed successfully", order: savedOrder });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all orders for a user
export const getUserOrders = async (req, res) => {
  const { userId } = req.params;

  try {
    const orders = await Order.find({ userId }).populate("products.productId");
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Admin: Get all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("products.productId userId");
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Admin: Update order status
export const updateOrderStatus = async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );

    res.status(200).json({ message: "Order status updated", order: updatedOrder });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
