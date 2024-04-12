import React, { useState, useEffect } from 'react';

const Counter = ({ countTo }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < countTo) {
      // Set a timeout to increment the count
      const timer = setTimeout(() => setCount(count + 1), 20); // Adjust time as needed
      return () => clearTimeout(timer);
    }
  }, [count, countTo]);

  return <span>{count}</span>;
};

const Stats = () => {
  return (
    <div>
      <section className="pt-3 pb-4" id="count-stats">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto py-3">
              <div className="row">
                <div className="col-md-4 position-relative">
                  <div className="p-3 text-center">
                    <h1 className="text-gradient text-warning">
                      <Counter countTo={70} />+
                    </h1>
                    <h5 className="mt-3">Various Templates</h5>
                    <p className="text-sm font-weight-normal">From freshers, to experienced, for professionals and also for beginners & students too.</p>
                  </div>
                  <hr className="vertical dark" />
                </div>
                <div className="col-md-4 position-relative">
                  <div className="p-3 text-center">
                    <h1 className="text-gradient text-primary">
                      <Counter countTo={15} />+
                    </h1>
                    <h5 className="mt-3">Design Blocks</h5>
                    <p className="text-sm font-weight-normal">Mix the sections, change the colors and unleash your creativity</p>
                  </div>
                  <hr className="vertical dark" />
                </div>
                <div className="col-md-4">
                  <div className="p-3 text-center">
                    <h1 className="text-gradient text-warning">
                      <Counter countTo={4} />
                    </h1>
                    <h5 className="mt-3">Free To Download</h5>
                    <p className="text-sm font-weight-normal">Save your first 3 resumes for free </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
