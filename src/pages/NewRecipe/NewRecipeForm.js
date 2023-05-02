import React from "react";

let values = [
        {"name": "Mexican", "objectId": "rcPEM9xl1i"},
        {"name": "American", "objectId": "CcI09EygnW"}
    ]

/* STATELESS CHILD COMPONENT */
/* This form will be useful when we start submitting recipes on the user interface. Probably from user profile */
const NewRecipeForm = ({ onChangeIngredients, onChangeInstructions, onClick, onChangeName, onChangeCategory }) => {
  return (
    <div>
      <hr />
      
      <form>
      <input text="test3" onChange={onChangeName} placeholder="Name of Recipe"/>
        <input text="test" onChange={onChangeIngredients} placeholder="Ingredients"/>
        <input text="test2" onChange={onChangeInstructions} placeholder="Instructions"/>
        <select id="dynamicDropdown" onChange={onChangeCategory} placeholder="Pick one dude">
            <option key="placeholder" value="" required>Please select a category</option>
        {/* Use the map() method to loop through the list of values and create an option element for each one */}
        {values.map((category) => (
          <option key={category.objectId} value={category.objectId}>
            {category.name} - {category.objectId}
          </option>
        ))}
      </select>
        <button type="submit" onClick={onClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewRecipeForm;