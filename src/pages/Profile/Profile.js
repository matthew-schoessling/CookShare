import React from 'react';
import TopMenu from '../../components/navigation/TopMenu'
import './Profile.css';
import ProfileHeaders from '../../components/content/ProfileHeaders'
import PastLivestreams from '../../components/content/PastLivestreams/PastLivestreams';
import UserRecipes from '../../components/content/UserRecipes/UserRecipes';

function Profile(props) {
    return (
      <div>
          <TopMenu tab={props.tab}/>
          <ProfileHeaders></ProfileHeaders>
          <div className='row-column-view'>
            <PastLivestreams></PastLivestreams>
            <UserRecipes></UserRecipes>
          </div>
      </div>
    );
  }
  
  export default Profile;