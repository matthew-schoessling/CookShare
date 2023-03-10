import React from 'react';
import TopMenu from '../../components/navigation/TopMenu';
import TopLivestreams from '../../components/content/TopLivestreams';
import PastLivestreams from '../../components/content/PastLivestreams';
import RecentRecipes from '../../components/content/RecentRecipes';
import './Feed.css';
// import FeedList from './FeedList';

function Feed(props) {
  return (
    <div className="feed">
        <TopMenu tab={props.tab}/>
        <TopLivestreams />
        <div className="row-column-view">
          <PastLivestreams />
          <RecentRecipes />
          {/* <FeedList></FeedList> */}
        </div>
    </div>
  );
}

export default Feed;
