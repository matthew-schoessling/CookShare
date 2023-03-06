import React from 'react';
import TopMenu from '../../components/navigation/TopMenu';
import TopLivestreams from '../../components/content/TopLivestreams/TopLivestreams';

function Feed(props) {
  return (
    <div>
        <TopMenu tab={props.tab}/>
        <TopLivestreams />
    </div>
  );
}

export default Feed;
