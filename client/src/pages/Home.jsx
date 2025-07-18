import React from 'react';

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Welcome to SnackShop</h1>
          <p className="col-md-8 fs-4">Authentic snacks and condiments made with love and tradition. Taste the heritage!</p>
        </div>
      </div>

      <h2 className="mb-4">Featured Products</h2>
      <div className="row">
        {[1, 2, 3].map((id) => (
          <div className="col-md-4 mb-4" key={id}>
            <div className="card h-100">
              <img src={`https://via.placeholder.com/300x200?text=Product+${id}`} className="card-img-top" alt={`Product ${id}`} />
              <div className="card-body">
                <h5 className="card-title">Featured Product {id}</h5>
                <p className="card-text">This is a short description of a traditional item.</p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;