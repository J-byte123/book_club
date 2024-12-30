/* TODO - add your code to create a functional React component that renders a login form */

import React, { useState } from "react";
import { useLoginUserMutation } from "../Slice/apiSlice";
import { useDispatch } from "react-redux"; // New import
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch(); // New line of code

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
      console.error("Login failed:", err);
      alert("Invalid credentials or server error.");
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
    </div>
  );
};

export default Login;