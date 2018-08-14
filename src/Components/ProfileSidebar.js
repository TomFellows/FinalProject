import React, { Component } from 'react';
import '../CSS/ProfileSidebar.css'
import ProfilePic from './ProfilePic'



class ProfileSidebar extends Component {
  render() {
    return (
      <div className="column1">
       <ProfilePic src = "Images/chris.jpeg" />
      </div>
    );
  }
}

export default ProfileSidebar;
