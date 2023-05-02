// Auth Sign Up

import React, { useEffect, useState } from "react";
import { checkUser, createUser, createNewProfile } from "../../services/AuthService";
import SignUpForm from "../SignUp/SignUpForm";
import { useNavigate } from "react-router-dom";

const AuthSignUp = () => {
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: ""
  });

  // flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);

  // redirect already authenticated users back to home
  useEffect(() => {
    if (checkUser()) {
      alert("You are already logged in");
      navigate("/");
    }
  }, [navigate]);

  // useEffect that run when changes are made to the state variable flags
  useEffect(() => {
    if (newUser && add) {
      createUser(newUser).then((userCreated) => {
        createNewProfile()
        if (userCreated) {
          alert(
            `${userCreated.get("firstName")}, you successfully signed up! You're now logged in and can navigate to browse or feed!`
          );
          navigate("/");
        }
        setAdd(false);
    })
    }
  }, [navigate, newUser, add]);

  // Tracks value in input boxes so upon submit they're sent to back4app
  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value: newValue } = e.target;

    setNewUser({
      ...newUser,
      [name]: newValue
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setAdd(true);
  };

  // Use signup form to take in values for a new user
  return (
    <div>
      <SignUpForm
        user={newUser}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
};

export default AuthSignUp;