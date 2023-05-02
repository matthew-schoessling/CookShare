//Import Parse minified version
import Parse from "parse";

//CreateNewRecipe create new Parse object and set ingredients and instructions
export const createNewRecipe = async (ingredients, instructions, name, category) => {
  const Recipe = Parse.Object.extend("Recipe");
  const recipe = new Recipe();

  // Trying to figure out how to point at a category
  const Category = Parse.Object.extend("Category");
  const query = new Parse.Query(Category)

  await query.get(category).then((cat) => {
    recipe.set("Category", cat)
    recipe.set("ingredients", ingredients);
    recipe.set("instructions", instructions);
    recipe.set("name", name);
    recipe.set("PointerToUser", Parse.User.current())
  })
    return recipe.save().then((result) => {
      // returns new Recipe object
      return result
  
  });
}

// Returning all parse objects from the db
// Figure out how to get pointer data from a Recipe to its user's name and category's name
// export const getAllRecipes = async () => {
//   const Recipe = Parse.Object.extend("Recipe")
  

//   const query2 = new Parse.Query("Category") // Maybe this should be done in CategoryService and called as function?? Ask for feature 5
//   query2.get("CcI09EygnW").then( (object) => {
//     console.log("name: ", object.get("name"))
//   })

//   const query = new Parse.Query(Recipe); // I just switched this to down here it may be getting messed up after query2 was called. Look later

//   return query.find().then((results) => {
//     results.map( (result) => {
//       console.log("Category: ", result.get("Category").id)
//       query2.get(result.get("Category").id).then( (object) => {
//         result.set("Cat", object.get("name")) //Ok for some reason this isn't fulling working as it puts all categories in as Mexican while some are American in our database.Could be some async thing to check out
//         result.save()
//       })
//     })
//     return results
//   })
// };

// Query that returns based off an id. It kinda works but only returns a promise to RecentRecipes.js
// Ask Eva or Professor Wicks if there's a way for it to return the category (and not the promise) async
// export const getCategoryByID = async (objectId) => {
//   const query = new Parse.Query("Category")
//   await query.get(objectId).then((object) => {
//     const thisName = object.get("name");
//     return thisName;
//   })
// }