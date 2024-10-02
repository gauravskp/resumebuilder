import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './component/navbar';
import Wizard from './component/wizard_form';
import Hero from './component/hero';
import Aboutus from './component/about_us';
import Stats from './component/stats';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ClerkProvider, SignIn, SignUp } from '@clerk/clerk-react';

// Replace with your Clerk frontend API key
const clerkFrontendApi = "pk_test_cmVuZXdpbmctcHVtYS0yNi5jbGVyay5hY2NvdW50cy5kZXYk";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ClerkProvider frontendApi={clerkFrontendApi}>
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route
            path="/signin"
            element={
              <>
                <SignIn
                  path="/signin"
                  routing="path"
                  signUpUrl="/signup"
                  appearance={{
                    elements: {
                      card: "custom-sign-in-card-class",
                    },
                  }}
                  // Enable sign-in methods
                  signInOptions={{
                    emailAddress: true,
                    phoneNumber: true,
                    google: true,
                    github: true,
                    facebook: true,
                  }}
                />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <SignUp
                  path="/signup"
                  routing="path"
                  signInUrl="/signin"
                  appearance={{
                    elements: {
                      card: "custom-sign-up-card-class",
                    },
                  }}
                  // Enable sign-up methods
                  signUpOptions={{
                    emailAddress: true,
                    phoneNumber: true,
                    google: true,
                    github: true,
                    facebook: true,
                  }}
                />
              </>
            }
          />
          <Route path="/wizard_form" element={<>  <Wizard /> </>} />
          <Route path="/" element={<App />} />
          <Route path="/about" element={<><Navbar /> <Hero /> <Stats /> <Aboutus /></>} />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  </ClerkProvider>,
  document.getElementById('root')
);
