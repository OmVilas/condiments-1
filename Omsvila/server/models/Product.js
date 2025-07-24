// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   imageUrl: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   description: String,
//   category: String,
// }, { timestamps: true });

// const Product = mongoose.model("Product", productSchema);

// export default Product;
// models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: String,
  category: String,
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
