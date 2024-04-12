import React, { useState } from 'react';
import './css/material-kit.css';

import Navbar from './component/navbar';
import Hero from './component/hero';
import Stats from './component/stats';
import Aboutus from './component/about_us';
import Review from './component/review';
import Template from './component/template';
import Footer from './component/footer';

// Import the Login component
import Login from './component/login';

function App() {
  // State to track if the login popup should be open or closed
  const [loginOpen, setLoginOpen] = useState(false);

  // Function to toggle the login popup
  const toggleLogin = () => {
    setLoginOpen(!loginOpen);
  };

  return (
    <div>
      {/* Pass toggleLogin function as a prop to Navbar */}
      <Navbar onSignInClick={toggleLogin} />
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

      {/* Render Login component conditionally based on loginOpen state */}
      {loginOpen && <Login onClose={toggleLogin} />}
    </div>
  );
}

export default App;
