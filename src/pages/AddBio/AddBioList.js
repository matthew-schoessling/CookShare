import React, { useEffect, useState } from "react";
import { createNewBio } from '../../services/BioService';
// import { getAllCategories } from '../../services/CategoryService';
import AddBioForm from './AddBioForm';
import Parse from 'parse'
import './AddBio.css'

const AddBioList = () => {
  const [bio, setBio] = useState([]);


  // Flags in state for whether to add/remove bio
  const [add, setAdd] = useState(false);
  //use this later if we want remove capabilities
//   const [remove, setRemove] = useState(""); 

  // UseEffect that runs when changes
  // are made to the state variables/flags
  useEffect(() => {
    // Check for add flag and make sure name state variable is defined
    if (bio && add) {
        console.log('in that changing useEffect: ', bio, add)
        createNewBio(bio).then( (bio) => {
            setAdd(false);
            alert(`${Parse.User.current().get("firstName")}, you successfully updated your bio!`)
        })
    }
  }, [bio, add]);
  // Will have to come back and add remove functionality

  // Handler to handle event passed from child submit button
  const onClickHandler = (e) => {
    console.log('on click handler: ', e.target.value)
    e.preventDefault();
    setAdd(true);
  };

  // Handler to track changes to the child input text
  const onChangeHandlerBio = (e) => {
    e.preventDefault();
    console.log('Bio: ', e.target.value, ' ', typeof(e.target.value));
    // Continuously updating name to be added on submit
    setBio(e.target.value);
  };


  return (
      <div className='form'>
        <h3>This you can submit new bio</h3>
        <AddBioForm onClick={onClickHandler} onChangeBio={onChangeHandlerBio} />
      </div>
  )};

export default AddBioList;