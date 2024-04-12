import React from 'react';
import './css/material-kit.css';

import Navbar from './component/navbar';
import Hero from './component/hero';
import Stats from './component/stats';
import Aboutus from './component/about_us';
import Review from './component/review';
import Template from './component/template';
import Footer from './component/footer';



function App() {
  

  return (
    
    <div>
      <Navbar />
      <Hero />
        <div className="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
           <Stats />
           <Aboutus />
        </div>
        <div className="card card-body shadow-blur mx-3 mx-md-4 mt-n6">
           <Template />
        </div>
      <Review />
      <Footer />
    </div>
  );

  
}

export default App;
