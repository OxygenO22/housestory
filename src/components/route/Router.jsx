import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Body } from '../pages/Body';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Body />} path='/'/>
        <Route element={<div>Not found</div>} path="*" />
      </Routes>
    </BrowserRouter>
  )
}
