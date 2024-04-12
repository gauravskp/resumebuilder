import React from 'react';

function Login({ onClose }) {
  return (
    <div className="login-popup">
      {/* Your login form goes here */}
      <div className="login-form">
        {/* Close button */}
        <button className="close-button" onClick={onClose}>X</button>
        {/* Login form fields */}
        <div class="wrapper">
         <div class="title-text">
            <div class="title login">
               Login Form
            </div>
            <div class="title signup">
               Signup Form
            </div>
         </div>
         <div class="form-container">
            <div class="slide-controls">
               <input type="radio" name="slide" id="login" checked />
               <input type="radio" name="slide" id="signup" />
               <label for="login" class="slide login">Login</label>
               <label for="signup" class="slide signup">Signup</label>
               <div class="slider-tab"></div>
            </div>
            <div class="form-inner">
               <form action="#" class="login">
                  <div class="field">
                     <input type="email" placeholder="Email Address" required />
                  </div>
                  <div class="field">
                     <input type="password" placeholder="Password" minlength="8" required />
                  </div>
                  <div class="pass-link">
                     <a href=" " target="blank">Forgot password?</a>
                  </div>
                  <div class="field btn">
                     <div class="btn-layer"></div>
                     <input type="submit" value="Login" />
                  </div>
                  <div class="signup-link">
                     Not a member? <a href=" " target="blank">Signup now</a>
                  </div>
               </form>
               <form action="#" class="signup">
                  <div class="field">
                     <input type="email" placeholder="Email Address" required />
                  </div>
                  <div class="field">
                     <input type="password" placeholder="Password" minlength="8" required />
                  </div>
                  <div class="field">
                     <input type="password" placeholder="Confirm password" required />
                  </div>
                  <div class="field btn">
                     <div class="btn-layer"></div>
                     <input type="submit" value="Signup" />
                  </div>
               </form>
            </div>
         </div>
      </div>
        {/* ... */}
      </div>
    </div>
  );
}

export default Login;
