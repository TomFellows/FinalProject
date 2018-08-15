import React, { Component } from 'react';
import '../CSS/ProfileSidebar.css'
import Profile from './Profile'





class ProfileSidebar extends Component {

  render() {
    return (
   
      <div class='profileSidebar'><Profile src = "Images/chris.jpeg" /></div>

    );
  }
}

export default ProfileSidebar;
