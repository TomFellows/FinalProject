import React, { Component } from 'react';
import '../CSS/ConnectionLargeProfilePic.css'

class ConnectionLargeProfilePic extends Component {
    render () {
        return <div>
        <img src = {this.props.src} className = "connProfilePic"/>
        </div>    
    }
}

export default ConnectionLargeProfilePic;