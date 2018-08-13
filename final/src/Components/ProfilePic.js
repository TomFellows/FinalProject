import React, { Component } from 'react';
import '../CSS/ProfilePic.css'



class ProfilePic extends Component {
    render() {
        return <div className = "profile">
            <img src={this.props.src} className="profilePic"/>
            <br/>
            <br/>
            <div>Instruments: ...</div>
            <br/>
            <div>Age: ...</div>
            <br/>
            <div>Username: ...</div>
            <br/>
            <div>Info: ...</div>
            <br/>
            <div>Info: ...</div>
            <br/>
            <div>Info: ...</div>
            <br/>
            <div>Info: ...</div>
            
            </div>

      }
  }


export default ProfilePic;