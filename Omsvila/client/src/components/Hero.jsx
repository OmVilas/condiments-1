import React from 'react';
import { Link } from 'react-router-dom';
// import './Hero.css'; // Make sure to create this file

const Hero = () => (
  <div className="hero-section">
    <div className="container-fluid hero-content">
      <div className="hero-text">
        <h1>Pure Taste from<br />Traditional Roots</h1>
        <p>Experience the authentic flavors of homemade condiments and snacks, crafted with love using time-honored recipes.</p>
        <div className="hero-buttons">
          <Link to="/products" className="btn shop-btn">Shop Now</Link>
          <Link to="/about" className="btn learn-btn">Learn More</Link>
        </div>
      </div>
      <div className="hero-image">
        <img src="/src/assets/Hero-img-1.png" alt="Snack" width={400}  />
      </div>
    </div>
  </div>
);

export default Hero;
