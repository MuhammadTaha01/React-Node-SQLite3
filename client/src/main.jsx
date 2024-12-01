import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
