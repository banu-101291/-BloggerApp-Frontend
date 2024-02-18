import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import App from './App'; // Import your main App component

ReactDOM.render(
  <Router> {/* Wrap your entire application with BrowserRouter */}
    <App />
  </Router>,
  document.getElementById('root')
);
