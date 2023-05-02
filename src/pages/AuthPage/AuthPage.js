import React from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../services/AuthService';
import TopMenu from '../../components/navigation/TopMenu/TopMenu'

//Beta landing page that we'll add some fun css to at some point for nice background, aesthetic, etc

// This landing page can become the login/signup page. We'll incorporate the subcomponents of login/signup
// Auth.js

function AuthPage() {
  return (
    <div>
      <TopMenu></TopMenu>
    <div>
      <h1>Welcome to CookShare! Auth/Landing Page</h1>
      <p>Check out <Link to="/feed">your feed</Link>.</p>
      <p>Check out <Link to="/browse">your browse</Link>.</p>
    </div>

    {/* Buttons to bring one to signup or login */}
    <div>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
      <br />
      <br />
      <Link to="/login">
        <button>Login</button>
      </Link>
      <br/><br/>
      <button onClick={logoutUser}>Logout</button>
    </div>
    </div>
  );
}

export default AuthPage;
