import React, { useEffect, useState } from "react";
import './UserRecipes.css'
import { getAllRecipes } from '../../../services/UserRecipeService';

// There's adding recipe functionality that has been left in pages/Feed/FeedList.js
// At some point this functionality will probably want to be added to the profile page I would presume

const UserRecipes = () => {

  const [recipes, setRecipes] = useState([]);

  // const user = new Parse.User()

  useEffect(() => {
    getAllRecipes().then((recipes) => {
      console.log("recipes: ", recipes)
      setRecipes(recipes);
    });
  }, []);

  return (
    <div className="recent-recipes-wrapper">
      <h2 className="recent-recipes-header">User Recipes</h2>
      <ul className="recent-recipes-list">

      {/* Map through the array of recipes and display */}
      {recipes.map((recipe) => (

        <li className="recent-recipe-container" key={recipe.get("ingredients")}>
          <img className="recent-recipe-user-image" src={recipe.get("Category").get("Photo").url()} alt="category flik"></img>
            <h3 className="recent-recipe-user">{recipe.get("name")}</h3>
            <h3 className="recent-recipe-name">{recipe.get("ingredients")}</h3>
            <h6 className="recent-recipe-category">{recipe.get("Category").get("name")}</h6>
        </li>
      ))}
        
      </ul>
    </div>
  );
}

export default UserRecipes;
