import React from 'react';
import './PastLivestreams.css'

// Have to discuss how we want to get the data into here
/* 
Do we need a separate class with past livestreams? Or does each recipe have an optional livestream attachment to it 
and if it is attached then include it in past livestream?
 */

function PastLivestreams() {
  return (
    <div className="past-livestreams-wrapper">
      <h2 className="past-livestreams-header">Recent Livestreams</h2>
      <ul className="past-livestreams-list">
        <li className="past-livestream-container">
          <div className="past-livestream-image"></div>
          <h3 className="past-livestream-user">Rachael Ray</h3>
          <h6 className="past-livestream-title">{"IT'S THE WEEKEND! Friday livestream :)"}</h6>
          <h3 className="past-livestream-recipe">Spaghetti and Meatballs</h3>
          <h6 className="past-livestream-category">Italian</h6>
        </li>
        <li className="past-livestream-container">
          <div className="past-livestream-image"></div>
          <h3 className="past-livestream-user">Rachael Ray</h3>
          <h6 className="past-livestream-title">{"IT'S THE WEEKEND! Friday livestream :)"}</h6>
          <h3 className="past-livestream-recipe">Spaghetti and Meatballs</h3>
          <h6 className="past-livestream-category">Italian</h6>
        </li>
        <li className="past-livestream-container">
          <div className="past-livestream-image"></div>
          <h3 className="past-livestream-user">Rachael Ray</h3>
          <h6 className="past-livestream-title">{"IT'S THE WEEKEND! Friday livestream :)"}</h6>
          <h3 className="past-livestream-recipe">Spaghetti and Meatballs</h3>
          <h6 className="past-livestream-category">Italian</h6>
        </li>
        <li className="past-livestream-container">
          <div className="past-livestream-image"></div>
          <h3 className="past-livestream-user">Rachael Ray</h3>
          <h6 className="past-livestream-title">{"IT'S THE WEEKEND! Friday livestream :)"}</h6>
          <h3 className="past-livestream-recipe">Spaghetti and Meatballs</h3>
          <h6 className="past-livestream-category">Italian</h6>
        </li>
      </ul>
    </div>
  );
}

export default PastLivestreams;
