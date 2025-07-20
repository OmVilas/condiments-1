import React from 'react';
import Hero from '../components/Hero';
import About from './About';

const Home = () => {
  return (
    <>
      <Hero />
      <About/>
      {/* Add more sections here like testimonials, features, etc. */}
    </>
  );
};

export default Home;
