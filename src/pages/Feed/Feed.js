import React from 'react';
import TopMenu from '../../components/navigation/TopMenu';
import TopLivestreams from '../../components/content/TopLivestreams';
import PastLivestreams from '../../components/content/PastLivestreams';
import RecentRecipes from '../../components/content/RecentRecipes';
import './Feed.css';

function Feed(props) {
  return (
    <div className="feed">
        <TopMenu tab={props.tab}/>
        <TopLivestreams />
        <PastLivestreams />
        <RecentRecipes />
    </div>
  );
}

export default Feed;
