import React from 'react';
import TopMenu from '../../components/navigation/TopMenu';
import BroadcastWidget from '../../components/streaming/Publisher';


function User(props) {
  return (
    <div>
      <TopMenu tab={props.tab}/>
      <BroadcastWidget />
    </div>
  );
}

export default User;
