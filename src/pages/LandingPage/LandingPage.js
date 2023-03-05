import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <h1>Welcome to CookShare!</h1>
      <p>Check out <Link to="/feed">your feed</Link>.</p>
    </div>
  );
}

export default LandingPage;
