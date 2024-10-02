import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const loginStyles = css`
  margin: 0;
  padding: 0;
  background-color: black;
  color: #000;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 100%;
    max-width: 400px;
    padding: 20px;
  }

  .card {
    background-color: #fff;
    color: #000;
    padding: 20px;
    border-radius: 10px;
    width: 100%;
  }

  .btn-social {
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px 20px;
    font-size: 1rem;
  }

  .btn-social i {
    margin-right: 0;
  }

  .text-light {
    color: #000 !important;
  }

  .form-control {
    border: 1px solid #000;
    padding-left: 12px;
  }

  .form-control::placeholder {
    padding-left: 5px;
  }

  .form-control:focus {
    border-color: #000;
    box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.637);
  }

  /* Hide default show/hide password icons */
  input[type="password"]::-ms-reveal,
  input[type="password"]::-ms-clear {
    display: none;
  }

  input[type="password"]::-webkit-contacts-auto-fill-button,
  input[type="password"]::-webkit-credentials-auto-fill-button {
    display: none !important;
  }

.show-password-icon {
  position: absolute;
  right: 10px;
  top: 50%; /* Center vertically */
  transform: translateY(15%); /* Adjust for perfect centering */
  cursor: pointer;
  color: #000;
  font-size: 1.2rem; /* You can adjust the size of the icon if needed */
}


  .password-container {
    position: relative;
  }

  .already-login-custom:hover {
    color: #000 !important;
    text-decoration: underline;
  }

  hr {
    border: none;
    height: 1px;
    background-color: #000;
    margin: 20px 0;
  }
`;

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div css={loginStyles}>
      <div className="container">
        <div className="card">
          <h2 className="text-center">Sign In</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter username"
                required
              />
            </div>
            <div className="mb-3 password-container">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="password"
                placeholder="Password"
                required
              />
              <i
                className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} show-password-icon`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </div>
            <button type="submit" className="btn btn-dark w-100">Sign In</button>
            <hr />
            <div className="mt-4 row g-2 justify-content-center">
              <div className="col-auto">
                <button className="btn btn-social btn-dark d-flex align-items-center justify-content-center">
                  <i className="fab fa-github"></i>
                </button>
              </div>
              <div className="col-auto">
                <button className="btn btn-social btn-danger d-flex align-items-center justify-content-center">
                  <i className="fab fa-google"></i>
                </button>
              </div>
              <div className="col-auto">
                <button className="btn btn-social btn-primary d-flex align-items-center justify-content-center" style={{ backgroundColor: '#4267B2' }}>
                  <i className="fab fa-facebook"></i>
                </button>
              </div>
            </div>
          </form>
          <p className="text-center mt-3">
            Don't have an account? <Link to="/signup" className="text-light already-login-custom">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
