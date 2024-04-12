import React from 'react'
import rex2 from '../img/r_ex2.jpg'
import waveswhite from '../img/waves-white.svg'
import adobe from '../img/adobe_pdf.png'
import msword from '../img/ms_word.png'

const Template = () => {
  return (
    <div>

<section class="my-5">
  <div class="container">
    <div class="row">
      <div class="col-md-7 col-12 my-auto">
        <h3 class="text-gradient text-warning mb-0">You liked it.. !  &  Want more?</h3>
        <h3> </h3>
        <p class="pe-md-5 mb-4">
          Most complex and innovative Design Resumes Made by Our <a href=" " target="_blank">Developer Team </a> . Check our latest Job getting Templates.

          Designed for those who like bold elements and beautiful resumes. Made use of various elements, designed blocks and fully effective pages, Resume Buider is ready to help you create stunning Resumes.
        </p>
        <div class="github-buttons">
          <a href="https://www.my-resume-templates.com/" target="_blank" rel="noopener noreferrer" class="btn bg-gradient-warning mb-5 mb-sm-0">Get Your Resume </a>
          <div class="github-button">
            <span></span>
          </div>
        </div>
      </div>
      <div class="col-md-5 col-12 my-auto">
        <a href=" " target="blank" rel="noopener noreferrer">
          <img class="w-100 border-radius-lg shadow-lg" src={rex2} alt="pro" />
        </a>
      </div>
    </div>
  </div>
</section>

        <section class="py-sm-7" id="download-soft-ui">
  <div class="bg-gradient-dark position-relative m-3 border-radius-xl overflow-hidden">
    <img src={waveswhite.svg} alt="pattern-lines" class="position-absolute start-0 top-md-0 w-100 opacity-2" />
    <div class="container py-7 postion-relative z-index-2 position-relative">
      <div class="row">
        <div class="col-md-7 mx-auto text-center">
          <h3 class="text-white mb-0">Do you love this awesome</h3>
          <h3 class="text-white">Resume Kit for Geting Jobs..?</h3>
          <p class="text-white mb-5">Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you can find the Design System in HTML. Start a new project or give an old Bootstrap project a new look!</p>
          <a href="./assets/adobe_pdf.png" class="btn btn-primary btn-lg mb-3 mb-sm-0" target="blank"  download="resume_ex">Download Resume Templates..</a>
          
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-6 mx-auto">
        <div class="text-center">
          <h3 class="mt-5 mb-4">Available on these File Types</h3>
          <div class="row justify-content-center">
            <div class="col-lg-2 col-4">
              <a href=" " target="_blank">
                <img src={adobe} class="img-fluid" alt="adobe" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Adobe PDF - Export in the pdf format" />
                
              </a>
            </div>
            <div class="col-lg-2 col-4">
              <a href=" " target="blank">
                <img src={msword} alt="msword" class="img-fluid opacity-6" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Must be exported in the Micrsoft Word '.docx file'" />
              </a>
            </div>
    
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



    </div>
  )
}

export default Template