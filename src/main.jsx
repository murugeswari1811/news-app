import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home.jsx';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/news" element={<App />} />
  </Routes>
  </Router>
)
