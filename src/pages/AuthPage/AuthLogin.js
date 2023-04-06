// AuthLogin
import React, { useEffect, useState } from "react";
import { checkUser, loginUser } from "../../services/AuthService"; 
import { useNavigate } from "react-router-dom";
import LogInForm from "../LogIn/LogInForm";

const AuthLogin = () => {
    const navigate = useNavigate();
  
    // redirect already authenticated users back to home
    const [currentUser, setCurrentUser] = useState({
      email: "",
      password: ""
    });
  
    // flags in the state to watch for add/remove updates
    const [add, setAdd] = useState(false);
  
    useEffect(() => {
      if (checkUser()) {
        alert("You are already logged in");
        navigate("/");
      }
    }, [navigate]);
  
    // useEffect that run when changes are made to the state variable flags
    useEffect(() => {
      if (currentUser && add) {
        loginUser(currentUser).then((userLoggedIn) => {
          if (userLoggedIn) {
            alert(
              `${userLoggedIn.get("firstName")}, you're now logged in! Feel free to use the browse and feed links!`
            );
            navigate("/");
          }
          setAdd(false);
        });
      }
    }, [navigate, currentUser, add]);
  
    // Keeps track of key changes so credentials are kept when submit 
    const onChangeHandler = (e) => {
      e.preventDefault();
      const { name, value: newValue } = e.target;
  
      setCurrentUser({
        ...currentUser,
        [name]: newValue
      });
    };
  
    const onSubmitHandler = (e) => {
      e.preventDefault();
      setAdd(true);
    };
  
    // Use login form to send handlers and track currentUser
    return (
      <div>
        <LogInForm
          user={currentUser}
          onChange={onChangeHandler}
          onSubmit={onSubmitHandler}
        />
      </div>
    );
  };
  
  export default AuthLogin;