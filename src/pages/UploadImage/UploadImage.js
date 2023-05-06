import React from 'react';
import TopMenu from '../../components/navigation/TopMenu';
import UploadImageList from './UploadImageList'

function Feed(props) {
    return (
        <div> 
        <TopMenu tab={props.tab}/>
        <UploadImageList></UploadImageList>
        </div>
    );
  }
  
  export default Feed;