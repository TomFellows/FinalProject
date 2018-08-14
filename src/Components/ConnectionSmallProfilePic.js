import React, { Component } from 'react';
import '../CSS/ConnectionSmallProfilePic.css'

class ConnectionSmallProfilePic extends Component {
    render () {
        return <div>
        <img src = {this.props.src} className = "connSmallProfilePic"/>
        
        </div>    
    }
}

export default ConnectionSmallProfilePic;