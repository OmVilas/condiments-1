import { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
    const token = localStorage.getItem('token');
    const res = await axios.get('http://localhost:5000/api/cart', {
      headers: { Authorization: `Bearer ${token}` }
    });
    setCart(res.data);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const removeFromCart = async (id) => {
    const token = localStorage.getItem('token');
    await axios.delete(`http://localhost:5000/api/cart/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchCart();
  };

  return (
    <div className="container mt-4">
      <h2>My Cart</h2>
      {cart.map((item) => (
        <div className="card my-2" key={item._id}>
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Rs. {item.price}</p>
            <button className="btn btn-danger" onClick={() => removeFromCart(item._id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
