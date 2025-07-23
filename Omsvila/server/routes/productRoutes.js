// // routes/productRoutes.js
// import express from "express";
// import {
//   createProduct,
//   getAllProducts,
//   getProductById,
//   deleteProduct,
// } from "../controllers/productController.js";

// const router = express.Router();

// // Route: POST /api/products → Create a product
// router.post("/", createProduct);

// // Route: GET /api/products → Get all products
// router.get("/", getAllProducts);

// // Route: GET /api/products/:id → Get a product by ID
// router.get("/:id", getProductById);

// // Route: DELETE /api/products/:id → Delete a product
// router.delete("/:id", deleteProduct);

// export default router;
const express = require("express");
const router = express.Router();

const {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
} = require("../controllers/productController");

// Create a product
router.post("/", createProduct);

// Get all products
router.get("/", getAllProducts);

// Get product by ID
router.get("/:id", getProductById);

// Delete product
router.delete("/:id", deleteProduct);

module.exports = router;
