import React, { useState } from 'react';
import { Col, Form, Button } from 'react-bootstrap';
import rlogo from '../img/r_maker.png';

const Footer = () => {
  const [agree, setAgree] = useState(false);

  const handleCheckboxChange = (e) => {
    setAgree(e.target.checked);
  };

  return (
    <footer className="footer pt-5 mt-5 bg-light text-center text-lg-start">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-3 mb-4">
            <div>
              <a href="/">
                <img src={rlogo} className="mb-3 footer-logo" alt="main_logo" />
              </a>
              <h6 className="font-weight-bolder mb-4">Resume Builder</h6>
            </div>
            <div>
              <ul className="d-flex flex-row ms-n3 nav justify-content-center">
                <li className="nav-item">
                  <a className="nav-link pe-1" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook text-lg opacity-8"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pe-1" href="https://twitter.com/" target="_blank" rel="noreferrer">
                    <i className="fab fa-twitter text-lg opacity-8"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pe-1" href="https://instagram.com/" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram text-lg opacity-8"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pe-1" href="https://dribbble.com/" target="_blank" rel="noreferrer">
                    <i className="fab fa-dribbble text-lg opacity-8"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pe-1" href="https://github.com/" target="_blank" rel="noreferrer">
                    <i className="fab fa-github text-lg opacity-8"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pe-1" href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                    <i className="fab fa-youtube text-lg opacity-8"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-12 col-sm-12 col-lg-4 mb-4" id="contact_us">
            <div>
              <h6 className="text-sm">Company & Legal</h6>
              <ul className="flex-column ms-n3 nav">
                <li className="nav-item">
                  <a className="nav-link" href="#about_us" target="_blank" rel="noreferrer">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact_us" target="_blank" rel="noreferrer">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#terms-of-service" target="_blank" rel="noreferrer">
                    Terms & Conditions
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#privacy-policy" target="_blank" rel="noreferrer">
                    Privacy Policy
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#licence" target="_blank" rel="noreferrer">
                    Licenses (EULA)
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Col lg={5} md={12} className="mb-4 mb-md-0">
            {/* Contact Us Form */}
            <div className="row">
              <Form action="https://formsubmit.co/prajapatigaurav1301@gmail.com" method="post">
                <h5 className="text-center bold mb-4">Contact Us</h5>
                <Form.Group className="mb-3 input-group input-group-dynamic form-label form-control" controlId="formFirstName">
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>
                <Form.Group className="mb-4 input-group input-group-dynamic" controlId="formLastName">
                  <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
                <Form.Group className="mb-4 input-group input-group-dynamic" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-4 input-group input-group-dynamic mb-4" controlId="formMessage">
                  <Form.Control as="textarea" rows={3} placeholder="Your Message" />
                </Form.Group>
                <Form.Group className="mb-3 input-group input-group-dynamic mb-4" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label=""
                    checked={agree}
                    onChange={handleCheckboxChange}
                  />
                  <label className="form-check-label ms-3 mb-0">I agree to the <a href="/" className="text-dark"><u>Terms and Conditions</u></a>.</label>
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!agree}>
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </div>

        <div className="col-12">
          <div className="text-center">
            <p className="text-dark my-4 text-sm font-weight-normal">
              All rights reserved. Copyright © {new Date().getFullYear()} Resume Buider by <a href="https://www.devgaurav.com" target="_blank" rel="noreferrer">developer Gaurav</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
