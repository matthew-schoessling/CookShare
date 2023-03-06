import React from 'react';
import TopMenu from '../../components/navigation/TopMenu';
import TopLivestreams from '../../components/content/TopLivestreams/TopLivestreams';
import './Feed.css';

function Feed(props) {
  return (
    <div className="feed">
        <TopMenu tab={props.tab}/>
        <TopLivestreams />
    </div>
  );
}

export default Feed;
