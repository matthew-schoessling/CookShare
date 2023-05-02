//Import Parse minified version
import Parse from "parse";

//CreateNewRecipe create new Parse object and set ingredients and instructions
export const createNewBio = async (bio) => {
  const user = Parse.User.current()

  // Trying to figure out how to point at a category

  user.set('bio', bio)
    return user.save().then((result) => {
      // returns new Recipe object
      return result
  
  });
}