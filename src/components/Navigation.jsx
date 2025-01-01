/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */

import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logout } from '../Slice/authSlice';

const Navigation = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => !!state.auth.token); 
  console.log('isLoggedIn:', isLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
    alert('You have successfully logged out.');
  };

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        {!isLoggedIn && <Link to="/login">Login</Link>}
        {!isLoggedIn && <Link to="/register">Register</Link>}
        {isLoggedIn && <Link to="/account">Account</Link>}
        {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
      </nav>
    </>
  );
};

export default Navigation;
