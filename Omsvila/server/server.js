import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cartRoutes from "./routes/cartRoutes.js"; // ✅ Added
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3009;

app.use(express.json());
app.use("/api/cart", cartRoutes); // ✅ All cart routes go under /api/cart

app.use("/api/products", productRoutes);

app.use("/api/orders", orderRoutes);

app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("🎉 Backend API is working!");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
