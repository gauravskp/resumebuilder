import React from 'react';
import hero_bg from  '../img/hero_bg.jpg';
import resume_ex from '../img/resume_ex.jpg';

console.log(hero_bg);
console.log(resume_ex);

const Hero = () => {
  return (
    <div><header class="header-2" id="head1">
    <div class="page-header min-vh-95 " style={{backgroundImage:`url(${hero_bg})`}}>
      <span class="mask bg-gradient-danger opacity-4"></span>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center mx-auto">
            <h1 class="text-white pt-8 mt-n5">Create your Resume  with ease and professionalism.</h1>
            <p class="lead text-white mt-3">Free & Open Source Resume Creating Online Platform  . <br/> </p>
            <button class="btn btn-warning btn-lg mb-3 mb-sm-0">Create Your Resume</button>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center mx-auto ">
            <img src={resume_ex} class="relative" style={{borderRadius:'10px'}} height="350px" alt="" role="button" />
          </div>
        </div>
      </div>
    </div>
  </header></div>
  )
}

export default Hero