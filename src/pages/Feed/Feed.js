import React from 'react';
import TopMenu from '../../components/navigation/TopMenu'

function Feed(props) {
  return (
    <div>
        <TopMenu tab={props.tab}/>
    </div>
  );
}

export default Feed;
