import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";


const Contact = () => {
  return (
    <div className="contact-page container py-5">
      <h2 className="section-title mb-4 text-center">
        <strong>Get In Touch</strong>
        <div className="underline mx-auto"></div>
      </h2>

      <div className="row g-4">
        {/* Left Side - Info + Hours */}
        <div className="col-lg-5">
          <div className="row g-4">
            {/* Contact Info */}
            <div className="col-12">
              <div className="info-card shadow-sm p-4 rounded-3 h-100">
                <h5 className="mb-3 fw-semibold">Contact Information</h5>
                <div className="info-item d-flex mb-3">
                  <div className="icon-box me-3"><FaPhoneAlt /></div>
                  <div>
                    <strong>Phone</strong><br />
                    +91 83003 44022
                  </div>
                </div>
                <div className="info-item d-flex mb-3">
                  <div className="icon-box me-3"><FaEnvelope /></div>
                  <div>
                    <strong>Email</strong><br />
                    omvilascondiments1998@gmail.com
                  </div>
                </div>
                <div className="info-item d-flex mb-3">
                  <div className="icon-box me-3"><FaMapMarkerAlt /></div>
                  <div>
                    <strong>Location</strong><br />
                    Mandya, Karnataka, India
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="col-12">
              <div className="info-card shadow-sm p-4 rounded-3 h-100">
                <h5 className="mb-3 fw-semibold">Operating Hours</h5>
                <div className="info-item d-flex">
                  <div className="icon-box me-3"><FaClock /></div>
                  <div>
                    <strong>Mon–Fri:</strong> 9 AM–6 PM<br />
                    <strong>Sat:</strong> 10 AM–4 PM<br />
                    <strong>Sun:</strong> Closed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="col-lg-7">
          <div className="info-card shadow-sm p-4 rounded-3 h-100">
            <h5 className="mb-4 fw-semibold">Send Us a Message</h5>
            <form>
              <input className="form-control mb-3" placeholder="Your Name" required />
              <input className="form-control mb-3" placeholder="Your Email" required />
              <input className="form-control mb-3" placeholder="Subject" required />
              <textarea className="form-control mb-3" rows="5" placeholder="Your Message" required></textarea>
              <button type="submit" className="btn w-100 send-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
