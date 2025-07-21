import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  {
    image: '/images/murukku.png',
    name: 'Murukku',
    desc: 'Traditional South Indian spiral-shaped snack made from rice flour and spices.',
    price: 80,
  },
  {
    image: '/images/palak-sev.png',
    name: 'Palak Sev',
    desc: 'Crunchy spinach-flavored thin noodle snack, perfect for munching.',
    price: 95,
  },
  {
    image: '/images/garlic-mix.png',
    name: 'Garlic Mixture',
    desc: 'Spicy and flavorful mix with the goodness of garlic, perfect with tea.',
    price: 110,
  },
  {
    image: '/images/murukku.png',
    name: 'Murukku',
    desc: 'Traditional South Indian spiral-shaped snack made from rice flour and spices.',
    price: 80,
  },
  {
    image: '/images/palak-sev.png',
    name: 'Palak Sev',
    desc: 'Crunchy spinach-flavored thin noodle snack, perfect for munching.',
    price: 95,
  },
  {
    image: '/images/garlic-mix.png',
    name: 'Garlic Mixture',
    desc: 'Spicy and flavorful mix with the goodness of garlic, perfect with tea.',
    price: 110,
  },
];

const Products = () => {
  return (
    <section className="products-section py-5">
      <div className="container">
        <h2 className="section-title text-start mb-5">
          Our <span className="">Products</span>
        </h2>

        <div className="row g-4">
          {products.map((item, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
              <ProductCard {...item} />
            </div>
          ))}
        </div>

        {/* Centered View All Button */}
        <div className="text-center mt-5 ">
          <button className="btn btn-primary text-white px-4 py-2">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
