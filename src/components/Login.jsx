/* TODO - add your code to create a functional React component that renders a login form */

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useLoginUserMutation } from '../Slice/apiSlice';
// Probably don't need below for now
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
 main

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useLoginUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Both email and password are required.");
      return;
    }
    // the following change or addition helps store user data and helps clear errors
    try {
      const userData = await loginUser({ email, password }).unwrap();
      dispatch({
        type: "auth/setUser",
        payload: {
          user: userData.user,
          token: userData.token,
        },
      });

      alert("Login successful!");
      navigate("/books");
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
      {/* Add navigation or additional actions if needed */}
    </div>
  );
};

export default Login;