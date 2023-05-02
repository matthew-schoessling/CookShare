import React from 'react';
import TopMenu from '../../components/navigation/TopMenu';
import BroadcastWidget from '../../components/streaming/Publisher';


function Stream(props) {
  return (
    <div>
      <TopMenu tab={props.tab}/>
      <BroadcastWidget />
    </div>
  );
}

export default Stream;