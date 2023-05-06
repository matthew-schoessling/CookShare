import Parse from 'parse'
  
// Returning all parse objects from the db
export const getAllCategories = () => {

    // return [
    //     {"name": "Mexican", "objectId": "rcPEM9xl1i"},
    //     {"name": "American", "objectId": "CcI09EygnW"}
    // ]

    // While this is the dynamic way to get all the categories, I'm inputting static data to be able to instantly grab it

    const Category = Parse.Object.extend("Category")
    const query = new Parse.Query(Category);
  
    return query.find().then((results) => {
        return results
    })
};