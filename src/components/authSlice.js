/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

import { createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';

const initialState = {
  token: null,  
  user: null,    
  isAuthenticated: false, 
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      const token = action.payload;
      state.token = token;

      try {
        state.user = jwtDecode(token); 
        state.isAuthenticated = true; 
      } catch (error) {
        console.error('Invalid token:', error);
        state.user = null;
        state.isAuthenticated = false;
      }
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setToken, logout } = authSlice.actions;

export default authSlice.reducer;