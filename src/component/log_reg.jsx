import React, { useState } from 'react';
import Navbar from '../component/navbar';
import '../css/material-kit.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import '../css/log_reg.css'; // Import the CSS for transitions

const LoginRegistrationToggle = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Implement login logic here
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      // Handle password mismatch scenario
      return;
    }
    // Implement registration logic here
  };

  return (
    <>
      <Navbar />
      <div className="container my-5" id="login">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card bg-secondary text-white login-card">
              <div className="card-body">
                <h2 className="card-title text-center">{isLogin ? 'Login' : 'Register'}</h2>
                {isLogin ? (
                  <form onSubmit={handleLoginSubmit}>
                    <div className="mb-3">
                      <label htmlFor="loginEmail" className="form-label">Email address</label>
                      <div className="input-group">
                        <span className="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></span>
                        <input
                          type="email"
                          className="form-control"
                          id="loginEmail"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="loginPassword" className="form-label">Password</label>
                      <div className="input-group">
                        <span className="input-group-text"><FontAwesomeIcon icon={faLock} /></span>
                        <input
                          type="password"
                          className="form-control"
                          id="loginPassword"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                  </form>
                ) : (
                  <form onSubmit={handleRegisterSubmit}>
                    <div className="mb-3">
                      <label htmlFor="registerEmail" className="form-label">Email address</label>
                      <div className="input-group">
                        <span className="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></span>
                        <input
                          type="email"
                          className="form-control"
                          id="registerEmail"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="registerPassword" className="form-label">Password</label>
                      <div className="input-group">
                        <span className="input-group-text"><FontAwesomeIcon icon={faLock} /></span>
                        <input
                          type="password"
                          className="form-control"
                          id="registerPassword"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="registerConfirmPassword" className="form-label">Confirm Password</label>
                      <div className="input-group">
                        <span className="input-group-text"><FontAwesomeIcon icon={faCheckCircle} /></span>
                        <input
                          type="password"
                          className="form-control"
                          id="registerConfirmPassword"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        />
                      </div>
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
    </>
  );
};

export default LoginRegistrationToggle;
