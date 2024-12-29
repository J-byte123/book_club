import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
// src/index.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
// eslint-disable-next-line no-unused-vars
import App from './App';

import SingleBook from '../components/SingleBook';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <SingleBook />
  </Provider>
);

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});