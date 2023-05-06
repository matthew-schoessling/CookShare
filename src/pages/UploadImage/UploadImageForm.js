import React from "react";

/* STATELESS CHILD COMPONENT */
/* This form will be useful when we start submitting recipes on the user interface. Probably from user profile */
const UploadImageForm = ({ onImageUpload }) => {
    return (
      <div>
        <label htmlFor="imageUpload">Upload a profile picture:</label>
        <input
          type="file"
          id="imageUpload"
          accept=".jpg,.jpeg,.png"
          onChange={onImageUpload}
        />
        {/* {image && <img src={image} alt="Profile" />} */}
      </div>
    );
};

export default UploadImageForm;