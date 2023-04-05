import React from 'react';
import { Link } from 'react-router-dom';

//Beta landing page that we'll add some fun css to at some point for nice background, aesthetic, etc

// This landing page can become the login/signup page. We'll incorporate the subcomponents of login/signup
// Auth.js

function AuthPage() {
  return (
    <div>
    <div>
      <h1>Welcome to CookShare! Das what's up</h1>
      <p>Check out <Link to="/feed">your feed</Link>.</p>
      <p>Check out <Link to="/browse">your browse</Link>.</p>
    </div>

    <div>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
      <br />
      <br />
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
    </div>
  );
}

export default AuthPage;
