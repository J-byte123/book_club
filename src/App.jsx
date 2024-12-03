import { useState } from 'react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigations />
        <Routes>
          <Route path="books" element={<Books />} />
          <Route path="books/:id" element={<SingleBook />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
