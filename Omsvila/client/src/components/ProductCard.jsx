// components/ProductCard.jsx
import React from 'react';


const ProductCard = ({ image, name, desc, price }) => {
  return (
    <div className="product-card shadow-sm rounded-4">
      <div className="image-section">
        <img src={image} alt={name} className="img-fluid snack-image" />
      </div>
      <div className="details-section p-3 bg-white rounded-bottom-4">
        <h5 className="product-name fw-bold">{name}</h5>
        <p className="product-desc text-muted mb-2">{desc}</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="price fw-bold text-danger">₹{price}</span>
          <button className="btn add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
