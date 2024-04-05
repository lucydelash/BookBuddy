import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <Router> {/* Wrap App with BrowserRouter */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);