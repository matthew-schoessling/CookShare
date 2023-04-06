import React from 'react';
import { Link } from 'react-router-dom';
import './TopMenu.css'

function TopMenu(props) {
  var feedItem = 'Feed';
  var browseItem = 'Browse';

  if (props.tab === 'Feed') {
    feedItem = <strong>Feed</strong>
  } else if (props.tab === 'Browse') {
    browseItem = <strong>Browse</strong>
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
      <Link to="/login" style={{ textDecoration: 'none' }}>
        <div className="top-menu-user"></div>
      </Link>
    </nav>
  );
}

export default TopMenu;
