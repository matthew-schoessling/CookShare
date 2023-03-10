import Parse from "parse";

//CreateNewCategory create new Parse object and set name/photo (might not need this)
export const createNewUser = (username, email, password) => {
    // This probably won't be used but keeping here just in case
    //I'd imagine categories are just created on the backend
}
  
// Returning all parse objects from the db
export const getAllCategories = async () => {
    const Category = Parse.Object.extend("Category")
    const query = new Parse.Query(Category);
  
    return query.find().then((results) => {
        return results
    })
};