import React from 'react';
import { FaCheckCircle, FaShippingFast, FaLock, FaBoxOpen } from 'react-icons/fa';

const FeatureSection = () => {
  return (
    <div className="feature-container">
      <section className="why-choose-us text-start">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="icon"><FaCheckCircle /></div>
            <h5>Quality Ingredients</h5>
            <p>We use only the finest ingredients with no preservatives or artificial additives.</p>
          </div>
          <div className="feature-card">
            <div className="icon"><FaShippingFast /></div>
            <h5>Fast Delivery</h5>
            <p>PAN India shipping with guaranteed freshness, delivered right to your doorstep.</p>
          </div>
          <div className="feature-card">
            <div className="icon"><FaLock /></div>
            <h5>Secure Payment</h5>
            <p>Multiple payment options with secure checkout for your convenience.</p>
          </div>
          <div className="feature-card">
            <div className="icon"><FaBoxOpen /></div>
            <h5>Premium Packaging</h5>
            <p>Vacuum-sealed packaging ensures maximum freshness and longer shelf life.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonial-grid">
          {[
            {
              name: "Rajesh Kumar",
              initials: "RK",
              stars: 5,
              review: "The Murukku reminds me of my grandmother’s cooking. Authentic taste and perfect crunch. Will definitely order again!",
            },
            {
              name: "Sneha Patel",
              initials: "SP",
              stars: 5,
              review: "Fast delivery and excellent packaging. The Palak Sev was fresh and flavorful. My kids loved the Banana Chips too!",
            },
            {
              name: "Arun Menon",
              initials: "AM",
              stars: 5,
              review: "The Garlic Mixture is addictive! Perfect spice level and so crunchy. Appreciate the no-preservatives approach. Monthly subscription started!",
            },
          ].map((cust, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-header">
                <div className="avatar">{cust.initials}</div>
                <div>
                  <strong>{cust.name}</strong>
                  <div className="stars">★★★★★</div>
                </div>
              </div>
              <p className="review">"{cust.review}"</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;
