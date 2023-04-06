import React, { useEffect, useState } from "react";
import { createNewRecipe, getAllRecipes } from '../../services/RecipeService';
import FeedForm from './FeedForm';

const FeedList = () => {
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

  useEffect(() => {
    getAllRecipes().then((recipes) => {
      setRecipes(recipes);
    });
  }, []);

  // Flags in state for whether to add/remove recipe
  const [add, setAdd] = useState(false);
  //use this later if we want remove capabilities
//   const [remove, setRemove] = useState(""); 

  // UseEffect that runs when changes
  // are made to the state variables/flags
  useEffect(() => {
    // Check for add flag and make sure name state variable is defined
    if (ingredients && instructions && add) {
        console.log('in that changing useEffect: ', ingredients, instructions, add)
        createNewRecipe(ingredients, instructions).then( (recipe) => {
            setAdd(false);
            setRecipes([...recipes, recipe]);
        })
    }
  }, [ingredients, instructions, recipes, add]);
  // Will have to come back and add remove functionality

  // Handler to handle event passed from child submit button
  const onClickHandler = (e) => {
    e.preventDefault();
    // Trigger add flag to create lesson and
    // re-render list with new lesson
    setAdd(true);
  };

  // Handler to track changes to the child input text
  const onChangeHandlerIngredients = (e) => {
    e.preventDefault();
    console.log('Ingred: ', e.target.value);
    // Continuously updating name to be added on submit
    setIngredients(e.target.value);
  };
  const onChangeHandlerInstructions = (e) => {
    e.preventDefault();
    console.log('Instr: ', e.target.value);
    setInstructions(e.target.value);
  };


  return (
      <div>
          <hr />
          This is the feed list component
          <div>
        {recipes.length > 0 && (
          <ul>
            {recipes.map((recipe) => (
              <div>
                <span>
                  {/* This functionality has switched to recent recipe component. Leaving it here for now in case we want to use later*/}
                  <li key={recipe.id}>
                    "hello"
                  </li>{" "}
                </span>
              </div>
            ))}
          </ul>
        )}
      </div>
        <h3>This you can submit new recipe</h3>
        <FeedForm onClick={onClickHandler} onChangeIngredients={onChangeHandlerIngredients} onChangeInstructions={onChangeHandlerInstructions} />
      </div>
  )};

export default FeedList;