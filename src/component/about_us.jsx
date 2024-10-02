import React from 'react'
import redesk from '../img/re_desk.jpg';
import rex2 from '../img/re_ex2.jpg';



const Aboutus = () => {
  return (
    <>


<section className="my-5 py-5" id="about">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
        <div className="rotating-card-container">
          <div className="card card-rotate card-background card-background-mask-primary shadow-primary mt-md-0 mt-5">
          <div className="front front-background" style={{backgroundImage: `url(${rex2})`, backgroundSize: "cover"}}>
              <div className="card-body py-7 text-center">
                <i className="material-icons text-white text-4xl my-3">touch_app</i>
                <h3 className="text-white">Pre-Designed  <br /> Templates </h3>
                <p className="text-white opacity-8">All the components that you need for creating a resume are available here with the new look.</p>
              </div>
            </div>
            <div className="back back-background" style={{backgroundImage: `url(${rex2})`, backgroundSize: "cover"}}>
              <div className="card-body pt-7 text-center">
                <h3 className="text-white">Discover More</h3>
                <p className="text-white opacity-8"> You will save a lot of time going from prototyping to full-functional code because all elements are implemented.</p>
                <a href=".//sections/page-sections/hero-sections.html" target="_blank" className="btn btn-white btn-sm w-50 mx-auto mt-3">See the Templates</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 ms-auto">
        <div className="row justify-content-start">
          <div className="col-md-6">
            <div className="info">
              <i className="material-icons text-gradient text-warning text-3xl mt-2">content_copy</i>
              <h5 className="font-weight-bolder mt-3">Full Documentation</h5>
              <p className="pe-5">Built by developers for developers. Check the foundation and you will find everything inside our documentation.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="info">
              <i className="material-icons text-gradient text-primary text-3xl">flip_to_front</i>
              <h5 className="font-weight-bolder mt-3">Well Formatted Resumes</h5>
              <p className="pe-3">These templates are designed by experts and follow the best practices for resume formatting, ensuring that your resume will look polished and professional. You can choose from different styles such as chronological, functional, or combination formats, and select the one that best showcases your experience and skills.</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-start mt-5">
          <div className="col-md-6 mt-3">
            <i className="material-icons text-gradient text-primary text-3xl">price_change</i>
            <h5 className="font-weight-bolder mt-3">Save Time & Money</h5>
            <p className="pe-5">Creating your design from scratch with dedicated designers can be time taking. Start with our Design System.</p>
          </div>
          <div className="col-md-6 mt-3">
            <div className="info">
              <i className="material-icons text-gradient text-warning text-3xl">devices</i>
              <h5 className="font-weight-bolder mt-3">Fully Responsive</h5>
              <p className="pe-3">Regardless of the screen size, the website content will naturally fit the given resolution.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
   

{/*   START Content Presentation Docs */} 
<div className="container mt-sm-5" id="about">
  <div className="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl overflow-hidden" style={{backgroundImage:`url(${redesk})` }} loading="lazy">
    <span className="mask bg-gradient-dark"></span>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 ms-lg-5">
          <h4 className="text-white">Built by developers</h4>
          <h1 className="text-white">Complex Documentation</h1>
          <p className="lead text-white opacity-8">From colors, cards, typography to complex elements, you will find the full documentation. Play with the utility classNamees and you will create unlimited combinations for our components.</p>
          <a href="  " className="text-white icon-move-right" target="_blank" rel="noopener noreferrer">

            Read docs
            <i className="fas fa-arrow-right text-sm ms-1"></i>
          </a>
          
        </div>
      </div>
    </div>
  </div>
</div>

{/*  END Content Presentation Docs  */}

</>
  )
}

export default Aboutus