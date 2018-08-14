import React, { Component } from 'react';
import '../CSS/ProfileSidebar.css'
import Profile from './Profile'





class ProfileSidebar extends Component {

  

  render() {
    return (
      <div className="column1">
      <Profile src = "Images/chris.jpeg" />

       
      </div>
    );
  }
}

export default ProfileSidebar;
