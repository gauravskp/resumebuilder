import React, { useState } from 'react';
import '../css/material-kit.css'; 


const LoginRegistrationToggle = () => {
  const [isLogin, setIsLogin] = useState(true); 

  const handleToggle = () => {
    setIsLogin(!isLogin); // Toggle the boolean state to switch forms
  };

  return (
    <div className="container my-5" id="login">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">{isLogin ? 'Login' : 'Register'}</h2>
              {isLogin ? (
                // Login Form
                <form>
                  <div className="mb-3">
                    <label htmlFor="loginEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="loginEmail" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="loginPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="loginPassword" required />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
              ) : (
                // Registration Form
                <form>
                  <div className="mb-3">
                    <label htmlFor="registerEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="registerEmail" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="registerPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="registerPassword" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="registerConfirmPassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="registerConfirmPassword" required />
                  </div>
                  <button type="submit" className="btn btn-success w-100">Register</button>
                </form>
              )}
              <div className="text-center mt-3">
                <button onClick={handleToggle} className="btn btn-link">
                  {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegistrationToggle;
