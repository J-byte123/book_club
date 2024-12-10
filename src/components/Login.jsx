/* TODO - add your code to create a functional React component that renders a login form */

import React, { useState } from 'react';
import { useLoginUserMutation } from '../Slice/apiSlice';
// Probably don't need below for now
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser] = useLoginUserMutation();
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
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
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
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {/* /* will have a sep Register page from Justin */}
      {/* <Link to="/register">Register</Link>
      {authKey && <p>Authentication Key: {authKey}</p>} */}
    </div>
  );
};

export default Login;
