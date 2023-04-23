import ReactDOM from 'react-dom/client';
import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Link, NavLink, Router } from "react-router-dom";


import Nav from '././components/Nav.jsx'
import Footer from '././components/Footer.jsx'
import ReturnToTop from "././components/returnToTopButton.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Nav />
      <ReturnToTop />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      <Footer />
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
