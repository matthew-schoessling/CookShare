import React from 'react';
import { Link } from 'react-router-dom';

//Beta landing page that we'll add some fun css to at some point for nice background, aesthetic, etc

// This landing page can become the login/register page. We'll incorporate the subcomponents of login/register
// Auth.js

function LandingPage() {
  return (
    // <div>
    //   <h1>Welcome to CookShare! Das what's up</h1>
    //   <p>Check out <Link to="/feed">your feed</Link>.</p>
    // </div>

    <div>
      <Link to="/auth/register">
        <button>Register</button>
      </Link>
      <br />
      <br />
      <Link to="/auth/login">
        <button>Login</button>
      </Link>
    </div>
  );
}

export default LandingPage;
