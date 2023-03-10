import React from 'react';
import TopMenu from '../../components/navigation/TopMenu'
import BrowseList from './BrowseList';

function Browse(props) {
  return (
    <div>
        <TopMenu tab={props.tab}/>
        <BrowseList></BrowseList>
    </div>
  );
}

export default Browse;
