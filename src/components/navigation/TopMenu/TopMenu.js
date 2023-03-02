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
      <div class="top-menu-list">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div class="top-menu-header top-menu-item">
            <div class="top-menu-logo"></div>
            <h3 class="top-menu-title">CookShare</h3>
          </div>
        </Link>
        <Link to="/feed" style={{ textDecoration: 'none' }}>
          <h3 class="top-menu-item list-item">{feedItem}</h3>
        </Link>
        <Link to="/browse" style={{ textDecoration: 'none' }}>
          <h3 class="top-menu-item list-item">{browseItem}</h3>
        </Link>
      </div>
      <div class="top-menu-user"></div>
    </nav>
  );
}

export default TopMenu;
