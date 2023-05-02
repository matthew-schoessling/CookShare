import React, { useEffect, useState } from "react";
import { createNewRecipe } from '../../services/RecipeService';
// import { getAllCategories } from '../../services/CategoryService';
import NewRecipeForm from './NewRecipeForm';
import './NewRecipe.css'

const NewRecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [name, setName] = useState([]);
  const [category, setCategory] = useState([]);


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
        createNewRecipe(ingredients, instructions, name, category).then( (recipe) => {
            setAdd(false);
            setRecipes([...recipes, recipe]);
        })
    }
  }, [ingredients, instructions, recipes, name, add, category]);
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

  const onChangeNameInstructions = (e) => {
    e.preventDefault();
    console.log('Name: ', e.target.value);
    setName(e.target.value);
  };

  const onChangeHandlerCategory = (e) => {
      e.preventDefault();
      console.log('Category: ', e.target.value)
      setCategory(e.target.value)
  }


  return (
      <div className='form'>
        <h3>This you can submit new recipe</h3>
        <NewRecipeForm onClick={onClickHandler} onChangeIngredients={onChangeHandlerIngredients} onChangeInstructions={onChangeHandlerInstructions} onChangeName={onChangeNameInstructions} onChangeCategory={onChangeHandlerCategory}/>
      </div>
  )};

export default NewRecipeList;