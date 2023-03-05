import React from 'react';
import TopMenu from '../../components/navigation/TopMenu'

function Browse(props) {
  return (
    <div>
        <TopMenu tab={props.tab}/>
    </div>
  );
}

export default Browse;
