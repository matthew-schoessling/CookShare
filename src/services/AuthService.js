// This service will use createUser during signup and loginUser during login. Will also contain checkUser for verification

import Parse from "parse";

// used in signup component
export const createUser = (newUser) => {
  const user = new Parse.User();

  user.set("username", newUser.username);
  user.set("firstName", newUser.firstName);
  user.set("lastName", newUser.lastName);
  user.set("password", newUser.password);
  user.set("email", newUser.email);

  console.log("User: ", user);
  return user
    .signUp()
    .then((newUserSaved) => {
      return newUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

// Create New Profile to point to user
export const createNewProfile = () => {
  let profile = new Parse.Object('Profile')
  
  console.log("profile: ", profile)
  console.log(Parse.User.current())
  console.log(Parse.User.current().get("username"))

  profile.set("PointerToUser", Parse.User.current())

  console.log("USer from profile: ", profile.get("PointerToUser"))
  // console.log("USer from profile: ", profile.get("PointerToUser").get("username"))

  profile.save()

  console.log("profile: ", profile)
  Parse.User.current().set("PointerToProfile", profile)

}

export const getProfile = () => {
  console.log("Loggin In!!")
    const Profiles = Parse.Object.extend("Profile")
    const query = new Parse.Query(Profiles);
  
    return query.find().then((results) => {
      console.log(results)  
      return results
    })
};

// used in login component
export const loginUser = (currUser) => {
  const user = new Parse.User();

  user.set("password", currUser.password);
  user.set("username", currUser.email);

  console.log("User: ", user);
  console.log();
  return user
    .logIn(user.email, user.password)
    .then((currUserSaved) => {
      return currUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

// Logging out the user
export const logoutUser = () => {

  console.log("Loggin out User!")
  Parse.User.logOut().then( () => {
    alert('You have successfully logged out')
  })


}

// Checks if a user is authenticated
export const checkUser = (props) => {
  return Parse.User.current()?.authenticated;
};
