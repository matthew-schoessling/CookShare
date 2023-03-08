import React from 'react';
import './RecentRecipes.css'

function RecentRecipes() {
  return (
    <div className="recent-recipes-wrapper">
      <h2 className="recent-recipes-header">Recent Recipes</h2>
      <ul className="recent-recipes-list">
        <li className="recent-recipe-container">
          <div className="recent-recipe-user-image"></div>
          <h3 className="recent-recipe-user">Rachael Ray</h3>
          <h3 className="recent-recipe-name">Spaghetti and Meatballs</h3>
          <h6 className="recent-recipe-category">Italian</h6>
        </li>
        <li className="recent-recipe-container">
          <div className="recent-recipe-user-image"></div>
          <h3 className="recent-recipe-user">Rachael Ray</h3>
          <h3 className="recent-recipe-name">Spaghetti and Meatballs</h3>
          <h6 className="recent-recipe-category">Italian</h6>
        </li>
        <li className="recent-recipe-container">
          <div className="recent-recipe-user-image"></div>
          <h3 className="recent-recipe-user">Rachael Ray</h3>
          <h3 className="recent-recipe-name">Spaghetti and Meatballs</h3>
          <h6 className="recent-recipe-category">Italian</h6>
        </li>
        <li className="recent-recipe-container">
          <div className="recent-recipe-user-image"></div>
          <h3 className="recent-recipe-user">Rachael Ray</h3>
          <h3 className="recent-recipe-name">Spaghetti and Meatballs</h3>
          <h6 className="recent-recipe-category">Italian</h6>
        </li>
      </ul>
    </div>
  );
}

export default RecentRecipes;
