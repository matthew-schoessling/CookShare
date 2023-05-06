import React from "react";
import './RecentRecipes.css'
// import { getAllRecipes } from '../../../services/RecipeService';

// There's adding recipe functionality that has been left in pages/Feed/FeedList.js
// At some point this functionality will probably want to be added to the profile page I would presume

const RecentRecipes = () => {

  // const [recipes, setRecipes] = useState([]);

  // const user = new Parse.User()

  // useEffect(() => {
  //   getAllRecipes().then((recipes) => {
  //     setRecipes(recipes);
  //   });
  // }, []);

  return (
    <div className="recent-recipes-wrapper">
      <h2 className="recent-recipes-header">Recent Recipes</h2>
      <ul className="recent-recipes-list">

      {/* Map through the array of recipes and display */}
      {/* {recipes.map((recipe) => (
        <li className="recent-recipe-container" key={recipe.get("ingredients")}>
          <div className="recent-recipe-user-image"></div>
            <h3 className="recent-recipe-user">Rachael Ray</h3>
            <h3 className="recent-recipe-name">{recipe.get("ingredients")}</h3>
            <h6 className="recent-recipe-category">{recipe.get("Cat")}</h6>
        </li>
      ))} */}
      <p>hello</p>
        
      </ul>
    </div>
  );
}

export default RecentRecipes;
