import React, { useState } from "react";

const ProductForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({ name: "", price: "", category: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        name="name"
        placeholder="Product name"
        value={form.name}
        onChange={handleChange}
        required
        className="form-control mb-2"
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        required
        className="form-control mb-2"
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
        required
        className="form-control mb-2"
      />
      <button type="submit" className="btn btn-primary w-100">
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;
