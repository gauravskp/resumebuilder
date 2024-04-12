import React from 'react';

const Review = () => {
  return (
    <div>
      <section className="py-7">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="mb-0">Trusted by over</h2>
              <h2 className="text-gradient text-warning mb-3">1,679,477+ professionals and students</h2>
              <p className="lead">Many Fortune 500 companies, startups, universities and governmental institutions love Our Designed Resumes.</p>
            </div>
          </div>
          <div className="row mt-6">
            <div className="col-lg-4 col-md-8">
              <div className="card card-plain">
                <div className="card-body">
                  <div className="author">
                    <div className="name">
                      <h6 className="mb-0 font-weight-bolder">Nick Willever</h6>
                      <div className="stats">
                        <i className="far fa-clock"></i> 1 day ago
                      </div>
                    </div>
                  </div>
                  <p className="mt-4">"This is an excellent product, the documentation is excellent and helped me get things done more efficiently."</p>
                  <div className="rating mt-3">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-8 ms-md-auto">
              <div className="card bg-gradient-warning">
                <div className="card-body">
                  <div className="author align-items-center">
                    <div className="name">
                      <h6 className="text-white mb-0 font-weight-bolder">Shailesh Kushwaha</h6>
                      <div className="stats text-white">
                        <i className="far fa-clock"></i> 1 week ago
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-white">"I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"</p>
                  <div className="rating mt-3">
                    <i className="fas fa-star text-white"></i>
                    <i className="fas fa-star text-white"></i>
                    <i className="fas fa-star text-white"></i>
                    <i className="fas fa-star text-white"></i>
                    <i className="fas fa-star text-white"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-8">
              <div className="card card-plain">
                <div className="card-body">
                  <div className="author">
                    <div className="name">
                      <h6 className="mb-0 font-weight-bolder">Sameer Sharma</h6>
                      <div className="stats">
                        <i className="far fa-clock"></i> 3 weeks ago
                      </div>
                    </div>
                  </div>
                  <p className="mt-4">"Great product. Helped me cut the time to create my resume. I used the components within instead of starting from scratch. "</p>
                  <div className="rating mt-3">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="horizontal dark my-5"/>
        </div>
      </section>
    </div>
  );
};

export default Review;
