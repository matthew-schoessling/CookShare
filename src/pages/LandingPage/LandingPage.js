import React from 'react';
import { Link } from 'react-router-dom';

//Beta landing page that we'll add some fun css to at some point for nice background, aesthetic, etc

function LandingPage() {
  return (
    <div>
      <h1>Welcome to CookShare! Das what's up</h1>
      <p>Check out <Link to="/feed">your feed</Link>.</p>
    </div>
  );
}

export default LandingPage;
