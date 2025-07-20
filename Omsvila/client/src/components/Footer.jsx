import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* <div className="footer-header">
          <h1>Om Vilas</h1>
          <p className="tagline">Bringing authentic traditional taste to your doorstep since 1998.</p>
        </div> */}
        
        <div className="row footer">
          {/* Quick Links Column */}
          <div className="col-md-4 text-start">
            <h3>Quick Links</h3>
            <ul className="footer-links ">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          
          {/* Customer Service Column */}
          <div className="col-md-4 text-start">
            <h3>Customer Service</h3>
            <ul className="footer-links ">
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Return Policy</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Newsletter Column */}
          <div className="col-md-4 text-start">
            <h3>Newsletter</h3>
            <p className="newsletter-text">Subscribe to receive updates on new products and special offers.</p>
            <div className="newsletter-input">
              <input type="email" placeholder="Your email" />
            </div>
          </div>
        </div>
        
        <div className="footer-copyright">
          <p>© 2023 Om Vilas Condiments. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;