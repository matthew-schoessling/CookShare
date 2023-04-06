// This is where we'll setup the protected route. I think from the beginning everything should be protected
// Iow when somebody accesses the website they're brought to a home page with login or signup

import React from "react";
import { Navigate } from "react-router-dom";
import { checkUser } from "../services/AuthService";

// If user is logged in (checked via checkUser() ), then they'll be able to go to whatever component requested
// else, they'll go back to auth page (landing page)
const ProtectedRoute = ({ element: Component , ...rest }) => {
  if (checkUser()) {
    return <Component />;
  } else {
    alert(" Please login or sign up in order to view this page. ")
    return <Navigate to="/" replace />
  }
};

export default ProtectedRoute;