import Parse from "parse";

//CreateNewCategory create new Parse object and set name/photo (might not need this)
export const createNewUser = (username, email, password) => {
    // This will be used when we add in creating new users as a function. Upon creating sign ups
}
  
// Returning all parse objects from the db
export const getAllCategories = async () => {
    const Category = Parse.Object.extend("Category")
    const query = new Parse.Query(Category);
  
    return query.find().then((results) => {
        return results
    })
};