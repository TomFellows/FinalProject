import React, { Component } from 'react';
import {connect} from 'react-redux'
import ConnectionCardChat from './ConnectionCardChat.js'
import '../CSS/ConnectionsSidebar.css'




class ConnectionsSidebar extends Component {

    constructor() {
        super()

        
    }





    render() {

        let mappedConnections = []


        fetch('/getAllConnections', {
            credentials: 'same-origin'
        }).then(response => response.text())
            .then(response => {
                let parsedResponse = JSON.parse(response)
                let connections = parsedResponse.connectedUsers
                mappedConnections = connections.map(item => {
                    return (<ConnectionCardChat firstName='Leo' lastName='Krupps' connectionUserId={item.userId} />)
                })

            })

            return (
                <div className='sidebar'>
                    <div className="header">CHAT</div>
                    {mappedConnections}
                </div>)

    }
}

let mapStateToProps = (state) => {
    return {currentUser: state.currentUser, popUp: state.popUp}
  }

  
  let ConnectedConnectionsSidebar = connect(mapStateToProps)(ConnectionsSidebar)
  
  export default ConnectedConnectionsSidebar;