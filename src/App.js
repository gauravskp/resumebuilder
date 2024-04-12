import React from 'react';
import './css/material-kit.css';

import Hero from './component/hero';
import Stats from './component/stats';
import Aboutus from './component/about_us';
import Review from './component/review';
import Template from './component/template';
import Footer from './component/footer';

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <div className="container position-sticky z-index-sticky top-0">
        <nav className="navbar navbar-expand-lg blur border-radius-xl top-0 z-index-1 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
          <div className="container-fluid px-0">
            <a
              className="navbar-brand font-weight-bolder ms-sm-3"
              href="#index"
              rel="tooltip"
              title="Designed and Coded by Developer Gaurav"
              data-placement="bottom"
              target="_blank"
            >
              RESUME BUILDER
            </a>
            <button
              className="navbar-toggler shadow-none ms-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navigation"
              aria-controls="navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon mt-2">
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </span>
            </button>
            <div className="collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100" id="navigation">
              <ul className="navbar-nav text-dark mx-auto" content-space-between>
                <li className="nav-item">
                  <a className="nav-link" role="button" href=" " onClick={() => scrollToSection('home')}>
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href=" " onClick={() => scrollToSection('about')}>
                    About Us
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href=" "
                    role="button"
                    id="dropdownMenuTemplates"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Templates
                  </a>
                  <div className="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-xl mt-0 mt-lg-3" aria-labelledby="dropdownMenuPages">
                    <div className="d-none d-lg-block">
                      <h6 className="dropdown-header font-weight-bolder d-flex align-items-center px-1">Landing Page</h6>
                      <a href="./pages/about-us.html" className="dropdown-item border-radius-md">
                        <span></span>Professionals
                      </a>
                      <a href="./pages/contact-us.html" className="dropdown-item border-radius-md">
                        <span>Students</span>
                      </a>
                      <a href="./pages/author.html" className="dropdown-item border-radius-md">
                        <span>Fresher</span>
                      </a>
                    </div>
                  </div>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href=" " role="button" onClick={() => scrollToSection('contact_us')}>
                    Contact Us
                  </a>
                </li>
              </ul>
              <ul className="nav navbar-nav">
                <li className="nav-item ms-lg-auto">
                  <a className="nav-link nav-link-icon me-2" href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github me-1"></i>
                    <p className="d-inline text-sm z-index-1 font-weight-bolder" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Star us on Github" role="button">
                      Github
                    </p>
                  </a>
                </li>
                <li className="nav-item my-auto ms-3 ms-lg-0">
                  <a className="btn btn-sm bg-gradient-warning mb-0 me-1 mt-2 mt-md-0" href="../public/i2.html" role="button">
                    Sign In
                  </a>{' '}
                  |{' '}
                  <a href={" "} className="btn btn-sm bg-gradient-primary mb-0 me-1 mt-2 mt-md-0" >
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* header start */}

      <Hero />

      {/* header end */}

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
