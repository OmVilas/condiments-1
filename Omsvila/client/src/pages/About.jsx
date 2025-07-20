import React from "react";
import aboutImg from "../assets/about-Img.png"; // Use your actual image path

const About = () => {
  return (
    <div className="about-section">
      <div className="container mt-5">
        <h2 className="section-title">
          Our Story
        </h2>

        <div className="about-card shadow-sm p-4 mt-3 d-flex flex-wrap align-items-center">
          <div className="col-md-5">
            <img
              src={aboutImg}
              alt="About Visual"
              className="img-fluid rounded"
            />
          </div>

          <div className="col-md-7 mt-4 mt-md-0 ps-md-4">
            <h5 className="fw-bold text-brown">Family-run since 1998</h5>
            <p className="text-muted">
              Founded in the heart of Mandya, Karnataka, Om Vilas Condiments began as a small
              family venture with a big dream: to share our grandmother’s authentic recipes with the world.
            </p>
            <p className="text-muted">
              For over two decades, we’ve remained true to our vision of delivering pure, traditional taste
              using only the highest quality ingredients. Every product we create is a testament to our family’s legacy
              and our commitment to preserving the authentic flavors of India.
            </p>
            <p className="text-muted">
              Our grandmother’s recipes have been passed down through generations, and we take immense pride
              in continuing this tradition of excellence and authenticity.
            </p>

            <div className="d-flex align-items-start mt-3 vision-block">
              <span className="check-icon me-2">&#10003;</span>
              <div>
                <strong className="text-brown">Our Vision</strong>
                <p className="mb-0 text-muted">To bring the authentic taste of traditional Indian snacks to every home.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
