/* TODO - add your code to create a functional React component that renders a login form */

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useLoginUserMutation } from '../Slice/apiSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser] = useLoginUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Both email and password are required.');
      return;
    }

    try {
      await loginUser({ email, password }).unwrap();
      alert('Login successful!');
      // Navigate to a different page if needed
      // Example: navigate('/dashboard');
    } catch (err) {
      console.error('Login failed:', err);
      alert('Invalid credentials or server error.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {/* Add navigation or additional actions if needed */}
    </div>
  );
};

export default Login;
