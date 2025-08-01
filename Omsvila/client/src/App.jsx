// client/src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Features from "./pages/Features";
import AdminProducts from './pages/AdminProducts'; // Admin View
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
           <Route path="/admin/products" element={<AdminProducts />} />
            <Route path="/admin/login" element={<AdminLogin />} />
           <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
