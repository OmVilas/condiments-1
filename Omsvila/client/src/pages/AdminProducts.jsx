import React from 'react';
import ProductCardAdmin from '../components/ProductCardAdmin';
import { products } from '../data/sampleData';

const AdminProducts = () => {
  const handleDelete = (name) => {
    alert(`Delete ${name} from database (not implemented yet)`);
  };

  return (
    <section className="products-section py-5">
      <div className="container">
        <h2 className="section-title text-start mb-5">
          Admin <span className="">Product List</span>
        </h2>

        <div className="row g-4">
          {products.map((item, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
              <ProductCardAdmin {...item} onDelete={() => handleDelete(item.name)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminProducts;
