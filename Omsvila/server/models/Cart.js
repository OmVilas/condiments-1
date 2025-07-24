// // models/Cart.js
// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//   productId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Product", // Make sure you create Product model later
//     required: true
//   },
//   quantity: {
//     type: Number,
//     default: 1
//   }
// });

// const cartSchema = new mongoose.Schema({
//   userId: {
//     type: String,
//     required: true
//   },
//   products: [productSchema]
// });

// const Cart = mongoose.model("Cart", cartSchema);

// export default Cart;
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },
  quantity: {
    type: Number,
    default: 1
  }
});

const cartSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  products: [productSchema]
});

module.exports = mongoose.model("Cart", cartSchema);
