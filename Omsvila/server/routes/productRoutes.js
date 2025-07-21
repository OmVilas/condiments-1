// routes/productRoutes.js
import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

// Route: POST /api/products → Create a product
router.post("/", createProduct);

// Route: GET /api/products → Get all products
router.get("/", getAllProducts);

// Route: GET /api/products/:id → Get a product by ID
router.get("/:id", getProductById);

// Route: DELETE /api/products/:id → Delete a product
router.delete("/:id", deleteProduct);

export default router;
