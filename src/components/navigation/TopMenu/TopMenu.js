import React from 'react';
import { Link } from 'react-router-dom';
import './TopMenu.css'
import Parse from 'parse'
import {logoutUser} from '../../../services/AuthService'

function TopMenu(props) {
  var feedItem = 'Feed';
  var browseItem = 'Browse';

  if (props.tab === 'Feed') {
    feedItem = <strong>Feed</strong>
  } else if (props.tab === 'Browse') {
    browseItem = <strong>Browse</strong>
  }

  let isLoggedIn = false
  // console.log(Parse.User.current())
  if (Parse.User.current()) {
    // console.log('in here')
    isLoggedIn = true
  }

  return (
    <nav>
      <div className="top-menu-list">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="top-menu-header top-menu-item">
            <div className="top-menu-logo"></div>
            <h3 className="top-menu-title">CookShare</h3>
          </div>
        </Link>
        <Link to="/feed" style={{ textDecoration: 'none' }}>
          <h3 className="top-menu-item list-item">{feedItem}</h3>
        </Link>
        <Link to="/browse" style={{ textDecoration: 'none' }}>
          <h3 className="top-menu-item list-item">{browseItem}</h3>
        </Link>
      </div>
      <div className='top-menu-user-2'>
      { isLoggedIn ?
        <Link to="/">
        <button onClick={logoutUser} className="top-menu-user-2">Logout</button>
      </Link>:
         <Link to="/login">
         <button className="top-menu-user-2">Login</button>
       </Link> 
      }
      </div>
      { isLoggedIn ?
        <Link to="/profile" style={{ textDecoration: 'none' }}>
        <img className="top-menu-user" src={Parse.User.current().get("ProfilePic").url()} alt="Navigation tool to profile page"></img>
      </Link> :
         <Link to="/">
          <button className="top-menu-user-3">Profile</button>
        </Link>
      }
    </nav>
  );
}

export default TopMenu;
