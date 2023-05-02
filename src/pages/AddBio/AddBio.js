import React from 'react';
import TopMenu from '../../components/navigation/TopMenu';
import AddBioList from './AddBioList'

function Feed(props) {
    return (
        <div> 
        <TopMenu tab={props.tab}/>
        <AddBioList></AddBioList>
        </div>
    );
  }
  
  export default Feed;