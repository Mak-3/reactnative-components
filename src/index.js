import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import "./index.css"

// Find the root container
const rootContainer = document.getElementById('root');

// Create the root and render the App component
const root = createRoot(rootContainer);
root.render(<App />);
