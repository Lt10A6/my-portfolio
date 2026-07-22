import React from 'react';
import { createRoot } from 'react-dom/client'; // <-- Note the '/client' here
import App from './App';

// Find the root element in your index.html
const container = document.getElementById('root');

// Create a root
const root = createRoot(container);

// Initial render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);