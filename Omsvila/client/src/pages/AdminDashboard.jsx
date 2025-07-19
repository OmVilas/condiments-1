import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await axios.get('http://localhost:5000/api/products');
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Admin - Manage Products</h2>
      {products.map((p) => (
        <div className="card my-2" key={p._id}>
          <div className="card-body">
            <h5 className="card-title">{p.name}</h5>
            <p>{p.description}</p>
            <p>Rs. {p.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;