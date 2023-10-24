"use client";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import React from 'react';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
