import React from 'react';
import './ProfileHeaders.css';
import { Link } from 'react-router-dom';
import Parse from "parse";

// Have to discuss how we want to get the data into here
/* 
Do we need a separate class with past livestreams? Or does each recipe have an optional livestream attachment to it 
and if it is attached then include it in past livestream?
 */

function ProfileHeaders() {
  return (
      <div>
      <div>
        <img className="profile-pic" src={Parse.User.current().get("ProfilePic").url()} alt="Profile of User"></img>
      </div>
      <div className="profile-username">{Parse.User.current().get("username")}</div>
      <div className="profile-bio">{Parse.User.current().get("bio")}</div>
      <div className="profile-divider"></div>
      <Link to="/newrecipe" style={{ textDecoration: 'none' }}>
        <button className='button-one'>Add Recipe</button>
      </Link>
        <Link to="/addBio" style={{ textDecoration: 'none' }} >
         <button className='button-two'>Add Bio</button>
        </Link>
      <Link to="/uploadimage" style={{ textDecoration: 'none' }}>
      <button className='button-three' >Upload Image</button>
      </Link>
      </div>
  );
}

export default ProfileHeaders;