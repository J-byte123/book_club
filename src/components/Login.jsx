/* TODO - add your code to create a functional React component that renders a login form */

 feature_ES
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useLoginUserMutation } from '../Slice/apiSlice';

import React, { useState } from 'react';
import { useLoginUserMutation } from '../Slice/apiSlice';
// Probably don't need below for now
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
 main

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser] = useLoginUserMutation();
 feature_ES

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

  // const [authKey, setAuthKey] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate authentication and generate a mock auth key
    // if (username && password) {
    //   const mockAuthKey = btoa(`${username}:${password}`);
    //   setAuthKey(mockAuthKey);
    //   alert(`Authentication Key: ${mockAuthKey}`);
    // } else {
    //   alert('Please enter both username and password');
    // }
    try {
      await loginUser({ email, password }).unwrap();
      alert('Login successful!');
    } catch (err) {
      console.error('Login failed:', err);
      alert('Please enter both email and password');
 main
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
 feature_ES
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

          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
 main
          />
        </div>
        <button type="submit">Login</button>
      </form>
 feature_ES
      {/* Add navigation or additional actions if needed */}

      {/* /* will have a sep Register page from Justin */}
      {/* <Link to="/register">Register</Link>
      {authKey && <p>Authentication Key: {authKey}</p>} */}
 main
    </div>
  );
};

export default Login;
