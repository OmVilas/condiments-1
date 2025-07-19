import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">Om Vilas</div>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/products">Products</Link></li>
      <li><Link to="/recipes">Recipes</Link></li>
      <li><Link to="/reviews">Reviews</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
    <div className="auth-buttons">
      <Link to="/login">Login</Link>
      <Link to="/signup" className="signup-btn">Signup</Link>
    </div>
  </nav>
);

export default Navbar;
