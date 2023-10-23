import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './auth.css';

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ UserAuthName: '', UserAuthPassword: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        // Redirect to the login page after successful registration
        navigate('/login');
      })
      .catch((error) => {
        console.error('Registration failed:', error);
      });
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="UserAuthName">Username:</label>
          <input
            type="text"
            id="UserAuthName"
            name="UserAuthName"
            value={user.UserAuthName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="UserAuthPassword">Password:</label>
          <input
            type="password"
            id="UserAuthPassword"
            name="UserAuthPassword"
            value={user.UserAuthPassword}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
