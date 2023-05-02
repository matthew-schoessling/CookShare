import React, { useEffect, useState } from "react";
import { getAllUsers } from '../../services/UserService';
import { getAllCategories } from '../../services/CategoryService';
import './Browse.css'

// Browse allows us to browse categories and popular chefs

/* 
Just displaying that user and category parse services are working correctly. Feature 5 we will tidy up which pages/components
use which data services
*/
const BrowseList = () => {
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllUsers().then((users) => {
      setUsers(users);
    });
    getAllCategories().then((categories) => {
        setCategories(categories);
      });
  }, []);

  return (
      <div>
          <hr />
          {/* Will need to add css to nav bar so it has a bottom margin */}
          <h1 className="h1">Welcome to the CookShare Livestream</h1> 
          <div className='viewer'>
          <iframe src="https://viewer.millicast.com?streamId=cMFGWT/firstStream" allowfullscreen width="640" height="480"></iframe>
          </div>
          {/* <h3>This is the browse list component</h3>
          <div>
              <h5>Showing users</h5>
        {users.length > 0 && (
          <ul>
            {users.map((user) => (
                  <li key={user.get("username")}>
                    <div>
                      {user.get("username")}
                    </div>
                  </li>
            ))}
          </ul>
        )}
      </div>
      <div>
          <hr />
              <h5>Showing categories</h5>
        {categories.length > 0 && (
          <ul>
            {categories.map((category) => (
                  <li key={category.get("name")}>
                    <div>
                      {category.get("name")} 
                    </div>
                  </li>
            ))}
          </ul>
        )}
      </div>  */}
      </div>
  )};

export default BrowseList;