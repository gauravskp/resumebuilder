import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import Navbar from './component/navbar';
// import hero_bg from '../src/component/hero_bg.jpg';
// import Wizard from './component/wizard_form';
import {BrowserRouter, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <Navbar /> */}
      <Routes>
       
        
      </Routes>
       <App />
    </React.StrictMode>
  </BrowserRouter>, document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

