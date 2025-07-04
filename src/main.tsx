import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import DataProtection from './DataProtection.tsx';
import NotaryServices from './NotaryServices.tsx';
import NotaryLanding from './NotaryLanding.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/data-protection" element={<DataProtection />} />
        <Route path="/notary-services" element={<NotaryServices />} />
        <Route path="/notary-landing" element={<NotaryLanding />} />
      </Routes>
    </Router>
  </StrictMode>
);