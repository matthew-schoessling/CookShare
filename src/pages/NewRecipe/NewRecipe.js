import React from 'react';
import TopMenu from '../../components/navigation/TopMenu';
import NewRecipeList from './NewRecipeList'

function Feed(props) {
    return (
        <div> 
        <TopMenu tab={props.tab}/>
        <NewRecipeList></NewRecipeList>
        </div>
    );
  }
  
  export default Feed;