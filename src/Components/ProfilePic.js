import React, { Component } from 'react';
import '../CSS/ProfilePic.css'



class ProfilePic extends Component {
    render() {
        return <div className = "profile">
            <img src={this.props.src} className="profilePic"/>
            
            <div className = "space">Instruments: ...</div>
            
            <div className = "space">Age: ...</div>
         
            <div className = "space">Username: ...</div>
          
            <div className = "space">Info: ...</div>
        
            
            </div>

      }
  }


export default ProfilePic;