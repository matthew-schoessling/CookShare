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
// Figure out how to get pointer data from a Recipe to its user's name and category's name
export const getAllRecipes = async () => {
  const Recipe = Parse.Object.extend("Recipe")
  const query = new Parse.Query(Recipe);

  const query2 = new Parse.Query("Category") // Maybe this should be done in CategoryService and called as function?? Ask for feature 5
  query2.get("CcI09EygnW").then( (object) => {
    console.log("name: ", object.get("name"))
  })

  return query.find().then((results) => {
    results.map( (result) => {
      console.log("Category: ", result.get("Category").id)
      query2.get(result.get("Category").id).then( (object) => {
        result.set("Cat", object.get("name")) //Ok for some reason this isn't fulling working as it puts all categories in as Mexican while some are American in our database.Could be some async thing to check out
        result.save()
      })
    })
    return results
  })
};

// Query that returns based off an id. It kinda works but only returns a promise to RecentRecipes.js
// Ask Eva or Professor Wicks if there's a way for it to return the category (and not the promise) async
export const getCategoryByID = async (objectId) => {
  const query = new Parse.Query("Category")
  await query.get(objectId).then((object) => {
    const thisName = object.get("name");
    return thisName;
  })
}