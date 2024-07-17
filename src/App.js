import React from 'react';
import './css/material-kit.css';

import Navbar from './component/navbar';
import Hero from './component/hero';
import Stats from './component/stats';
import Aboutus from './component/about_us';
import Review from './component/review';
import Template from './component/template';
import Footer from './component/footer';
import Logreg from './component/log_reg';


// No need to import BrowserRouter, Routes, or Route from react-router-dom

function App() {
  // Function to handle scrolling to a section
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  };

 
  return (
    <div>
      <Navbar scrollToSection={scrollToSection} />
      <div className='div2'>
      <Hero id="hero" />
      <div className="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6" id="stats">
        <Stats />
      </div>
      <div className="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6" id="about">
        <Aboutus />
      </div>
      <div className="card card-body shadow-blur mx-3 mx-md-4 mt-n6" id="template">
        <Template />
      </div>
      <Review id="review" />
      <Logreg id="login" />
      <Footer id="footer" />
      </div>
      {/* ... other sections ... */}
    </div>
  );
}


export default App;
