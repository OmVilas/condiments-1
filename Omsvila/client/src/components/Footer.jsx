import React from 'react';


const Footer = () => {
  return (

    <footer className="footer">
  <div className="container">
    <div className="row footer">
      {/* 🔶 Column 1: Om Vilas info + social icons */}
      <div className="col-md-3 text-start">
        <h3>Om Vilas</h3>
        <p>Bringing authentic traditional  <br />taste to your doorstep  <br />since 1998.</p>
        <div className="social-icons d-flex gap-3">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" >
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="social-icons">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      {/* 🔶 Column 2: Quick Links */}
      <div className="col-md-3 text-start">
        <h3>Quick Links</h3>
        <ul className="footer-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      {/* 🔶 Column 3: Customer Service */}
      <div className="col-md-3 text-start">
        <h3>Customer Service</h3>
        <ul className="footer-links">
          <li><a href="#">Shipping Policy</a></li>
          <li><a href="#">Return Policy</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>

      {/* 🔶 Column 4: Newsletter */}
      <div className="col-md-3 text-start">
        <h3>Newsletter</h3>
        <p className="newsletter-text">Subscribe to receive updates on new products and special offers.</p>
        <form>
          <div className="newsletter-input position-relative">
            <input
              type="email"
              placeholder="Your email"
              className="form-control pe-5"
            />
            <button
              type="submit"
              className="btn position-absolute top-50 end-0 translate-middle-y"
              style={{
                backgroundColor: '#f97316',
                color: '#fff',
                border: 'none',
                fontSize: '1.25rem',
                padding: '0.6rem 1rem',
              }}
            >
              →
            </button>
          </div>
        </form>
      </div>
    </div>

    <div className="text-center mt-4">
      <p>© 2023 Om Vilas Condiments. All rights reserved.</p>
    </div>
  </div>

  {/* 🔶 Floating WhatsApp Icon */}
  <a
    href="https://wa.me/916374500771"
    className="whatsapp-float"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
  >
    <i className="fab fa-whatsapp"></i>
  </a>
</footer>


  );
};

export default Footer;