// AuthLogin
import React, { useEffect, useState } from "react";
import { checkUser, loginUser } from "../../services/AuthService"; 
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";

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
              `${userLoggedIn.get("firstName")}, you successfully logged in!`
            );
            navigate("/");
          }
          // TODO: redirect user to main app
          setAdd(false);
        });
      }
    }, [navigate, currentUser, add]);
  
    const onChangeHandler = (e) => {
      e.preventDefault();
      console.log(e.target);
      const { name, value: newValue } = e.target;
      console.log(newValue);
  
      setCurrentUser({
        ...currentUser,
        [name]: newValue
      });
    };
  
    const onSubmitHandler = (e) => {
      e.preventDefault();
      console.log("submitted: ", e.target);
      setAdd(true);
    };
  
    return (
      <div>
        <AuthForm
          user={currentUser}
          isLogin={true}
          onChange={onChangeHandler}
          onSubmit={onSubmitHandler}
        />
      </div>
    );
  };
  
  export default AuthLogin;