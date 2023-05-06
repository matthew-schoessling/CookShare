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

// Adds a new category which will eventually trigger useEffect
export const addCategories = (e, activeCategories) => {
  const newCategories = new Set(activeCategories);
  newCategories.add(e);
  return newCategories;
}

// Deletes a category which will eventually trigger useEffect
export const deleteCategories = (e, activeCategories) => {
  const newCategories = new Set(activeCategories);
  newCategories.delete(e);
  return newCategories;
}

// Gets all the recipes based on if the recipes are in the activeCategories set
export const getAllRecipes = async (activeCategories) => {
  console.log("getting Categories in service: ", activeCategories)
  const Recipe = new Parse.Object.extend('Recipe')
 
   const query = new Parse.Query(Recipe);
   query.include("Category")
 
   return query.find().then((results) => { 
     let count = 0
     let len = results.length
     let newArray = []
      for (var i=0; i<len; i++) {
        console.log("type: ", typeof(activeCategories))
        if ( !activeCategories.has(results[count].get("Category").get("name")) ) {
          results.splice(count, 1);
          newArray = results
          count-=1
        }
        count += 1;
      }
       return newArray
   })
 };

