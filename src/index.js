import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import 'animate.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
if(sessionStorage.getItem('activelink') === null)
sessionStorage.setItem('activelink','accueil')

root.render(

  
    <Router>
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </Router>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
