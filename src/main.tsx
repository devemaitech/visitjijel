import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import AppHandler from './AppHandler.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/app/property/:id" element={<AppHandler />} />
        <Route path="/app/destination/:id" element={<AppHandler />} />
        <Route path="/app/*" element={<AppHandler />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
