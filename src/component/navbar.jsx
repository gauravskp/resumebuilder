import React from 'react';
import { Link } from 'react-router-dom';
// import Logreg from '../component/log_reg';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <div className="container position-sticky z-index-sticky top-0">
        <nav className="navbar navbar-expand-lg blur border-radius-xl top-0 z-index-1 shadow position-absolute my-3 py-2 start-0 end-0 mx-4" >
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
             
                <Link className="nav-link" to="/" onClick={() => scrollToSection('hero')}>
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/about" onClick={() => scrollToSection('about')}>
                    About Us
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/template"
                    role="button"
                    id="dropdownMenuTemplates"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Resumes
                  </Link>
                  <div className="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-xl mt-0 mt-lg-3" aria-labelledby="dropdownMenuPages" >
                    <div className="d-none d-lg-block">
                      <h6 className="dropdown-header font-weight-bolder d-flex align-items-center px-1">Landing Page</h6>
                      <button  className="dropdown-item border-radius-md">
                        <span>Professionals</span>
                      </button>
                      <button  className="dropdown-item border-radius-md">
                        <span>Students</span>
                      </button>
                      <button className="dropdown-item border-radius-md">
                        <span>Fresher</span>
                      </button>
                    </div>
                  </div>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/footer" role="button" onClick={() => scrollToSection('contact_us')}>
                    Contact Us
                  </Link>
                </li>
              </ul>
              <ul className="nav navbar-nav">
                <li className="nav-item ms-lg-auto">
                  <Link className="nav-link nav-link-icon me-2" to="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github me-1"></i>
                    <p className="d-inline text-sm z-index-1 font-weight-bolder" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Star us on Github" role="button">
                      Github
                    </p>
                  </Link>
                </li>
                <li className="nav-item my-auto ms-3 ms-lg-0">
                  {/* Attach onClick event to call onSignInClick */}
                  <Link className="btn btn-sm bg-gradient-warning mb-0 me-1 mt-2 mt-md-0" to="/login" role="button" onClick={() => scrollToSection('login')} >
                    Sign In
                  </Link>{' '}
                  |{' '}
                  <Link className="btn btn-sm bg-gradient-primary mb-0 me-1 mt-2 mt-md-0" >
                    Sign Up
                  </Link>
                </li>

              </ul>
    
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
