import React from 'react';

const ProductCardUser = ({ image, name, desc, price }) => {
  return (
    <div className="card shadow-sm rounded-4 overflow-hidden" style={{ width: '100%', maxWidth: '300px' }}>
      <div className="bg-warning-subtle p-3 text-center">
        <img
          src={image}
          alt={name}
          className="img-fluid"
          style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title fw-bold">{name}</h5>
        <p className="card-text text-muted small">{desc}</p>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="fw-bold text-danger">₹{price}</span>
          <button className="btn btn-warning text-white fw-semibold px-3 py-1">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardUser;
