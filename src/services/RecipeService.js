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

// Returning all parse objects from the db
// Figure out how to get pointer data
export const getAllRecipes = async () => {
  const Recipe = Parse.Object.extend("Recipe")
  const query = new Parse.Query(Recipe);

  return query.find().then((results) => {
    return results
  })
};

// Query that returns based off an id
export const getCategoryByID = async (objectId) => {
  console.log('we in here: ', objectId) 
  const query = new Parse.Query("Category")
  await query.get(objectId).then((object) => {
    const thisName = object.get("name");
    console.log(thisName)
    return thisName;
  })
}