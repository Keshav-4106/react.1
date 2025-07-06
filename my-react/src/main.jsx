import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';  // ✅ App ko yahan import karna zaroori hai
import './index.css';         // (optional) styling

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
