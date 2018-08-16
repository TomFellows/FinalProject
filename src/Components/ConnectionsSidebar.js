import React, { Component } from 'react';
import ConnectionCardChat from './ConnectionCardChat.js'
import '../CSS/ConnectionsSidebar.css'




class ConnectionsSidebar extends Component {
    render() {
        return (
            <div className = 'sidebar'>
               <div className = "header">CHAT</div>
               <ConnectionCardChat/>
               <ConnectionCardChat/>
               <ConnectionCardChat/>
               <ConnectionCardChat/>
            </div>
        );
    }
}

export default ConnectionsSidebar;
