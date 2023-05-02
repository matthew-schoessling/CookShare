import React from "react";

/* STATELESS CHILD COMPONENT */
/* This form will be useful when we start submitting recipes on the user interface. Probably from user profile */
const AddBioForm = ({ onClick, onChangeBio }) => {
  return (
    <div>
      <hr />
      
      <form>
      <input type="text" onChange={onChangeBio}  />
      <br/>
        <button type="submit" onClick={onClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBioForm;