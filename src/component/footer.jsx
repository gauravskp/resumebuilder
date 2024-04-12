import React, { useState } from 'react';
import { Col, Form, Button } from 'react-bootstrap';
import rlogo from '../img/r_maker.png'


const Footer = () => {
  const [agree, setAgree] = useState(false);

  return (

        <footer class="footer pt-5 mt-5 bg-light text-center text-lg-start">
    
    <div class="container">
      <div class=" row">
        <div class="col-md-12 col-lg-3 mb-4 ">
          <div>
            <a href=" ">
              <img src={rlogo} class="mb-3 footer-logo" alt="main_logo" />
            </a>
            <h6 class="font-weight-bolder mb-4">Resume Builder</h6>
          </div>
          <div>
            <ul class="d-flex flex-row ms-n3 nav justify-content-center">
              <li class="nav-item">
                <a class="nav-link pe-1" href="https://www.facebook.com/" target="blank">
                  <i class="fab fa-facebook text-lg opacity-8"></i>
                </a>
              </li>
  
              <li class="nav-item">
                <a class="nav-link pe-1" href="https://twitter.com/" target="blank">
                  <i class="fab fa-twitter text-lg opacity-8"></i>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link pe-1" href="https://instagram.com/" target="blank">
                  <i class="fab fa-instagram text-lg opacity-8"></i>
                </a>
              </li>
  
              <li class="nav-item">
                <a class="nav-link pe-1" href="https://dribbble.com/" target="blank">
                  <i class="fab fa-dribbble text-lg opacity-8"></i>
                </a>
              </li>
  
  
              <li class="nav-item">
                <a class="nav-link pe-1" href="https://github.com/" target="blank">
                  <i class="fab fa-github text-lg opacity-8"></i>
                </a>
              </li>
  
              <li class="nav-item">
                <a class="nav-link pe-1" href="https://www.youtube.com/" target="blank">
                  <i class="fab fa-youtube text-lg opacity-8"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
  
  
  
        <div class="col-md-12 col-sm-12 col-lg-4 mb-4" id="contact_us">
          <div>
            <h6 class="text-sm">Company & Legal</h6>
            <ul class="flex-column ms-n3 nav">
              <li class="nav-item">
                <a class="nav-link" href="#about_us" target="_blank">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact_us" target="_blank">
                  Contact Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#terms-of-service" target="_blank">
                  Terms & Conditions
                </a>
              </li>
  
              <li class="nav-item">
                <a class="nav-link" href="#privacy-policy" target="_blank">
                  Privacy Policy
                </a>
              </li>
  
              <li class="nav-item">
                <a class="nav-link" href="#licence" target="_blank">
                  Licenses (EULA)
                </a>
              </li>
            </ul>
          </div>
        </div>
  
        <div class="col-md-12 col-sm-6 col-lg-5 mb-4">
          <div class="row">
          <Col lg={9} md={12} className="mb-4 mb-md-0">
            {/* Contact Us Form */}
            <div class="row">
          
            <Form action="https://formsubmit.co/prajapatigaurav1301@gmail.com" method="post">
              <h5 className="text-center bold mb-4">Contact Us</h5>
              
              <Form.Group className="mb-3 input-group input-group-dynamic form-label form-control" controlId="formFirstName">
                <Form.Control type="text" placeholder="First Name"  />
              </Form.Group>
              <Form.Group className="mb-4 input-group input-group-dynamic  " controlId="formLastName">
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
              <Form.Group className="mb-4 input-group input-group-dynamic " controlId="formBasicEmail">
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
                  onChange={(e) => setAgree(e.target.checked)}
                />
                 <label class="form-check-label ms-3 mb-0" >I agree to the <a href=" "  
                      class="text-dark"><u>Terms and Conditions</u></a>.</label>
              </Form.Group>
       
              <Button variant="primary" type="submit" disabled={!agree}>
                Send Message
              </Button>
            </Form>
            </div>
          </Col>
        </div>
          
        </div>
  
   
  
  
        <div class="col-12">
          <div class="text-center">
            <p class="text-dark my-4 text-sm font-weight-normal">
              All rights reserved. Copyright © <script>document.write(new Date().getFullYear())</script> Resume Buider by <a href="https://www.devgaurav.com " target="blank">developer Gaurav</a>.
            </p>
          </div>
        </div>
      </div>
    </div>

  
     
      

  
    </footer>
  );
};

export default Footer;
