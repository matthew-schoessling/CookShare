import React from "react";
import UploadImageForm from './UploadImageForm';
import Parse from "parse";
import './UploadImage.css'

const UploadImageList = () => {

  // Handler to handle event passed from child submit button
  const onImageHandler = (e) => {
    const selectedImage = e.target.files[0];
    const parseFile = new Parse.File('profileImage.jpg', selectedImage)
    Parse.User.current().set("ProfilePic", parseFile)
    Parse.User.current().save()
  };

  return (
      <div className='form'>
        <h3>This you can submit new recipe</h3>
        <UploadImageForm onImageUpload={onImageHandler} />
      </div>
  )};

export default UploadImageList;