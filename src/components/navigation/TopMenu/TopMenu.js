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

  let isLoggedIn = true
  if (Parse.User.current()) {
    isLoggedIn = false
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
        <Link to="/login">
          <button className="top-menu-user-2">Login</button>
        </Link> :
         <Link to="/">
          <button onClick={logoutUser} className="top-menu-user-2">Logout</button>
        </Link>
      }
      </div>
      <Link to="/profile" style={{ textDecoration: 'none' }}>
        <img className="top-menu-user" src={Parse.User.current().get("ProfilePic").url()} alt="Navigation tool to profile page"></img>
      </Link>
    </nav>
  );
}

export default TopMenu;
