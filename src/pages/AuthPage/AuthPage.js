import React from 'react';
import TopMenu from '../../components/navigation/TopMenu/TopMenu'
// import './AuthPage.css'

//Beta landing page that we'll add some fun css to at some point for nice background, aesthetic, etc

// This landing page can become the login/signup page. We'll incorporate the subcomponents of login/signup
// Auth.js

function AuthPage() {
  return (
    <div>
      <TopMenu></TopMenu>
    <div>
      <h1>Welcome to CookShare! Auth/Landing Page</h1>
    </div>
    </div>
  );
}

export default AuthPage;
