import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
// import './Navbar.css'; // Optional for extra styling


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4">
      <div className="container-fluid">
     <Link className="navbar-brand fw-bold brand-logo" to="/">
  <span className="logo-orange">Om</span> <span className="logo-brown">Vilas</span>
</Link>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
         
          <i class="fa-solid fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="mainNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/features">Features</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            <Link to="/login" className="btn btn-outline-primary rounded-pill px-4 custom-login-btn">
              Login
            </Link>
            

            <div className="position-relative">
              <FiShoppingCart size={22} className="text-dark" />
             <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill custom-badge">
                0
              </span>

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
