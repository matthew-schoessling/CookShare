import React from "react";

/* STATELESS CHILD COMPONENT */
const FeedForm = ({ onChangeIngredients, onChangeInstructions, onClick }) => {
  return (
    <div>
      <hr />
      This is the feed form child component.
      <form>
        <input text="test" onChange={onChangeIngredients} placeholder="Ingredients"/>
        <input text="test2" onChange={onChangeInstructions} placeholder="Instructions"/>
        <button type="submit" onClick={onClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedForm;