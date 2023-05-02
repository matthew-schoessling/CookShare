//Import Parse minified version
import Parse from "parse";

//CreateNewRecipe create new Parse object and set ingredients and instructions
export const createNewRecipe = (ingredients, instructions) => {
  const Recipe = Parse.Object.extend("Recipe");
  const recipe = new Recipe();
  
  // Will need to add user and category at some point
  recipe.set("ingredients", ingredients);
  recipe.set("instructions", instructions);

  // Once recipe is saved return the parse object
  return recipe.save().then((result) => {
      // returns new Recipe object
      return result
  });
}

// Gets all recipes for the current user for the user profile page
export const getAllRecipes = async () => {
 console.log('We in getAllRecipes!!!!')
 const Recipe = new Parse.Object.extend('Recipe')

  const query = new Parse.Query(Recipe);
  query.include("Category")

  // Makes sure it's for the currentUser only
  query.equalTo('PointerToUser', Parse.User.current())

  return query.find().then((results) => { 
      console.log(results)
      return results
  })
};
