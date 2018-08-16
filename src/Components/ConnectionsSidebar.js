import React, { Component } from 'react';
import {connect} from 'react-redux'
import ConnectionCardChat from './ConnectionCardChat.js'
import '../CSS/ConnectionsSidebar.css'




class ConnectionsSidebar extends Component {
    render() {

        let connections = []

        connections = this.props.currentUser.connections.map(item => {
           return (<ConnectionCardChat firstName='Leo' lastName='Krupps' connectionUserId={item.userId}/>)
       })

        return (
            <div className = 'sidebar'>
               <div className = "header">CHAT</div>
               {connections}
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {currentUser: state.currentUser, popUp: state.popUp}
  }

  
  let ConnectedConnectionsSidebar = connect(mapStateToProps)(ConnectionsSidebar)
  
  export default ConnectedConnectionsSidebar;