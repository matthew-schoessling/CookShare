// This is where we'll setup the protected route. I think from the beginning everything should be protected
// Iow when somebody accesses the website they're brought to a home page with register or signup

import React from "react";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../services/AuthService";

// You can pass props using the spread operator to throw them on an object if there are too many to break out
const ProtectedRoute = ({ element: Component, ...rest }) => {
  console.log("element: ", Component);
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate("/auth");
  };
  if (checkUser()) {
    return <Component />;
  } else {
    return (
      <div>
        <p>Unauthorized!</p> <button onClick={goBackHandler}>Go Back.</button>
      </div>
    );
  }
};

export default ProtectedRoute;