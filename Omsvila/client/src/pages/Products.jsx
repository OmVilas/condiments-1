import React from 'react';

const Products = () => {
  const products = [
    { id: 1, name: 'Spiced Nuts', category: 'Snacks' },
    { id: 2, name: 'Crispy Chips', category: 'Snacks' },
    { id: 3, name: 'Mango Pickle', category: 'Condiments' },
    { id: 4, name: 'Tomato Chutney', category: 'Condiments' },
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Our Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card h-100">
              <img src={`https://via.placeholder.com/300x200?text=${product.name}`} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Category: {product.category}</p>
                <button className="btn btn-outline-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;