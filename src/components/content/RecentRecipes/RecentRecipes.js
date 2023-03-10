import React, { useEffect, useState } from "react";
import './RecentRecipes.css'
import { getAllRecipes, getCategoryByID } from '../../../services/RecipeService';

// There's adding recipe functionality that has been left in pages/Feed/FeedList.js
// At some point this functionality will probably want to be added to the profile page I would presume

const RecentRecipes = () => {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getAllRecipes().then((recipes) => {
      setRecipes(recipes);
    });
  }, []);

  return (
    <div className="recent-recipes-wrapper">
      <h2 className="recent-recipes-header">Recent Recipes</h2>
      <ul className="recent-recipes-list">

      {recipes.map((recipe) => (
        <li className="recent-recipe-container">
          <div className="recent-recipe-user-image"></div>
            <h3 className="recent-recipe-user">Rachael Ray</h3>
            <h3 className="recent-recipe-name">{recipe.get("ingredients")}</h3>
            {/* <h6 className="recent-recipe-category">{recipe.get("instructions")}</h6> */}
            <h6 className="recent-recipe-category">{recipe.get("Category").className}</h6>
            {console.log('problem: ', getCategoryByID(recipe.get("Category").id))}
        </li>
      ))}
        
      </ul>
    </div>
  );
}

export default RecentRecipes;
