import Parse from "parse";

export const createNewUser = (username, email, password) => {
    // This will be used when we add in creating new users as a function. Upon creating sign ups
}
  
// Returning all parse objects from the db
export const getAllUsers = async () => {
    const User = Parse.Object.extend("User")
    const query = new Parse.Query(User);
  
    return query.find().then((results) => {
        return results
    })
};

export const getCurrentUser = async () => {
    return Parse.User.current()
}