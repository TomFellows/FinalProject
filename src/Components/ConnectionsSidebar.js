import React, { Component } from 'react';
import {connect} from 'react-redux'
import socketIO from 'socket.io-client'
import ConnectionCardChat from './ConnectionCardChat.js'
import '../CSS/ConnectionsSidebar.css'
import { SETCURRENTCONNECTIONS } from '../ACTIONS.js';




class ConnectionsSidebar extends Component {

    constructor() {
        super()

        this.socket = socketIO("/")

        let getMessage = this.getMessage.bind(this)

        this.socket.on('message', getMessage);

        this.componentDidMount = this.componentDidMount.bind(this)
        this.resetMessages = this.resetMessages.bind(this)

        this.state = {messages: {}}
        
    }

    componentDidMount () {
        fetch('/getAllConnections', {
            credentials: 'same-origin'
        }).then(response => response.text())
            .then(response => {

                let parsedResponse = JSON.parse(response)

                if (parsedResponse.connectedUsers) {
                
                let connections = parsedResponse.connectedUsers

                this.props.setCurrentConnections(connections)
                }
        })


    }


    getMessage(msg) {
    
        let messages = this.state.messages

        if (!messages[msg.roomName]) {
            messages[msg.roomName] = 0
        }

        messages[msg.roomName] +=1

      this.setState({messages: messages})
    }

    resetMessages(roomName) {
        let messages = this.state.messages

        messages[roomName] = 0
        this.setState({messages: messages})
    }

    render() {

        let mappedConnections = []

        let currentUser = this.props.currentUser

        let socket = this.socket;
        
                mappedConnections = this.props.currentConnections.map(item => {

                    let chatRoomName = ''

                    if (currentUser.username > item.username) {
                        chatRoomName = currentUser.username + item.username
                    } else {
                        chatRoomName = item.username + currentUser.username
                    }

                    let roomInfos = {
                        name: chatRoomName,
                        otherUserId: item.userId
                    }

                    return (<ConnectionCardChat ref={chatRoomName} nbMessages={this.state.messages[chatRoomName]}
                            socket={socket} roomInfos={roomInfos} 
                            resetMessages={this.resetMessages} user={item}/>)
                })

            

            return (
                <div className='sidebar'>
                    <div className="header">Contacts</div>
                    {mappedConnections}
                </div>)

    }
}

let mapStateToProps = (state) => {
    return {currentUser: state.currentUser, currentConnections: state.currentConnections, popUp: state.popUp}
  }

  let mapDispatchToProps = (dispatch) => {
    return {setCurrentConnections: (connections) => dispatch({type: SETCURRENTCONNECTIONS, connections: connections})
    }
  }

  
  let ConnectedConnectionsSidebar = connect(mapStateToProps, mapDispatchToProps)(ConnectionsSidebar)
  
  export default ConnectedConnectionsSidebar;