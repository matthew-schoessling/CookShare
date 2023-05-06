import React, { useEffect, useState } from "react";
import './Browse.css'
import { getAllRecipes, addCategories, deleteCategories } from '../../services/RecipeService';
import Chip from '@mui/material/Chip';

const UserRecipes = () => {

  const [recipes, setRecipes] = useState([]);
  const [activeCategories, setActiveCategories] = useState(new Set());

  // Is fired when the categories changes
  useEffect(() => {
    console.log("in the use effect: ", activeCategories)
    getAllRecipes(activeCategories).then((recipes) => {
      setRecipes(recipes);
    });
  }, [activeCategories]);

  // Adds category if it's not in activeCategories so that a recipe displays, removes it if a recipe is already displaying
  const handleChipClick = (e) => {
    console.log("before: ", (e.target.textContent))
    if (!activeCategories.has(e.target.textContent)) {
        console.log("right before: ", activeCategories)
        setActiveCategories(addCategories(e.target.textContent, activeCategories))
        console.log("right after: ", activeCategories)
    } else {
        setActiveCategories(deleteCategories(e.target.textContent, activeCategories))
    }
    console.log("after: ", (activeCategories))
  }


  return (
    <div className="recent-recipes-wrapper">
      <h2 className="recent-recipes-header">LiveStream Viewing</h2>
      <iframe style={{marginTop: '50px'}} title="uniqueTitle" className="viewer" src="https://viewer.millicast.com?streamId=cMFGWT/firstStream" allowFullScreen width="640" height="480"></iframe>
      <h2 className="recent-recipes-header" style={{ marginTop: '550px' }} >Browse All Recipes (click Chips)</h2>
      {/* Group of chips. Chip buttons are used to filter the recipes somebody is looking at
      In the future, I'd also want to order recipes based on likes (this would be after following capabilities are implemented) */}
      <div className="button-group">
        <Chip sx={{marginRight: '10px'}} label="Mexican"onClick={handleChipClick} value="rcPEM9xl1i" />
        <Chip sx={{marginRight: '10px'}} label="Mediterranean"onClick={handleChipClick} value="ILYQSewXWL" />
        <Chip sx={{marginRight: '10px'}} label="Korean"onClick={handleChipClick} value="Z6HiMkevR9" />
        <Chip sx={{marginRight: '10px'}} label="Japanese"onClick={handleChipClick} value="enaHHZaKpn" />
        <Chip sx={{marginRight: '10px'}} label="Italian"onClick={handleChipClick} value="KPpsdScONN" />
        <Chip sx={{marginRight: '10px'}} label="French"onClick={handleChipClick} value="4Fg6g89XCx" />
        <Chip sx={{marginRight: '10px'}} label="Dessert"onClick={handleChipClick} value="c6uAzzNjHd" />
        <Chip sx={{marginRight: '10px'}} label="Chinese"onClick={handleChipClick} value="7b0JjfX1CH" />
        <Chip sx={{marginRight: '10px'}} label="Breakfast"onClick={handleChipClick} value="BxTOBdp4xT" />
        <Chip sx={{marginRight: '10px'}} label="American"onClick={handleChipClick} value="CcI09EygnW" />
      </div>
      <ul className="recent-recipes-list">

      {/* Map through the array of recipes and display */}
      {recipes.map((recipe) => (
        

        <li className="recent-recipe-container" key={recipe.get("objectId")}>
          <img className="recent-recipe-user-image" src={recipe.get("Category").get("Photo").url()} alt="category flik"></img>
            <h3 className="recent-recipe-user">{recipe.get("name")}</h3>
            <h3 className="recent-recipe-name">{recipe.get("ingredients")}</h3>
            <h6 className="recent-recipe-category">{recipe.get("Category").get("name")}</h6>
        </li>
      ))}
        
      </ul>
      {/* Users can watch the livestream to get new ideas on recipes and possibly follow along */}
     </div>
  );
}

export default UserRecipes;