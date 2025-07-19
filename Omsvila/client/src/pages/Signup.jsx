import React, { useState } from 'react';

const Signup = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Signup failed');
      alert('Signup successful!');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="mb-3">
          <label>Name:</label>
          <input type="text" className="form-control" required value={user.name} onChange={e => setUser({ ...user, name: e.target.value })} />
        </div>
        <div className="mb-3">
          <label>Email:</label>
          <input type="email" className="form-control" required value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} />
        </div>
        <div className="mb-3">
          <label>Password:</label>
          <input type="password" className="form-control" required value={user.password} onChange={e => setUser({ ...user, password: e.target.value })} />
        </div>
        <button className="btn btn-success">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
