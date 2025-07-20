import React from 'react';
import Hero from '../components/Hero';
import About from './About';
import Products from './Products';
import Features from './Features';
import Contact from './Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About/>
      <Products/>
      <Features/>
      <Contact/>
      {/* Add more sections here like testimonials, features, etc. */}
    </>
  );
};

export default Home;
