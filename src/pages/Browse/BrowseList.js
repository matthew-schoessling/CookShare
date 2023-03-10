import React, { useEffect, useState } from "react";
import { getAllUsers } from '../../services/UserService';
import { getAllCategories } from '../../services/CategoryService';

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
          <h1>hidden</h1> 
          <h3>This is the browse list component</h3>
          <div>
              <h5>Showing users</h5>
        {users.length > 0 && (
          <ul>
            {users.map((user) => (
              <div>
                <span>
                  {/* Using getter for lesson Object to display name */}
                  <li key={user.id}>
                    {user.get("username")}
                  </li>{" "}
                </span>
              </div>
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
              <div>
                <span>
                  {/* Dropped key like in FeedList */}
                  <li key={category.id}>
                    {category.get("name")} 
                  </li>{" "}
                </span>
              </div>
            ))}
          </ul>
        )}
      </div>
      </div>
  )};

export default BrowseList;