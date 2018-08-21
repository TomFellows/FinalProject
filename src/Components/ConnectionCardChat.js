import React, { Component } from 'react'
import socketIO from 'socket.io-client'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Chat from './Chat.js'
import '../CSS/ConnectionCardChat.css'

var socket = '';

class ConnectionCardChat extends Component {


    constructor (props) {

        super (props)
        
        if (this.props.openedChat === this.props.user.username) {
            this.state = {chatIsOpen: true}
        } else {
            this.state = {chatIsOpen: false}
        }
        
    }

    componentDidMount = () => {


        let roomInfos = this.props.roomInfos
        
        socket = this.props.socket

        socket.emit('room', roomInfos);

    }


   

    openCloseChat = () => {

        if (this.state.chatIsOpen === false) {

            this.props.resetMessages(this.props.roomInfos.name)
            this.setState({chatIsOpen: true})

        } else {
            this.props.resetMessages(this.props.roomInfos.name)
            this.setState({chatIsOpen: false})
        }
       

    }

    

    render() {
        
        let chatRoom = ''
        let nbMessages = (<div></div>)
        

        if (this.state.chatIsOpen === true) {

            chatRoom = <Chat roomInfos={this.props.roomInfos} socket={socket}/>

        } else {

            if (this.props.nbMessages > 0) {
                nbMessages = <div className='nbMessages' onClick={this.openCloseChat}>
                {this.props.nbMessages}</div>
            }
        }

        

        return(<div><div className='connectionCardChat'>
        <Link className = "link" to={'/OtherUserProfile/' + this.props.user.username}>
        <img src='/Images/tom.jpg' className='contactChatPic'/>
        {this.props.user.firstName + ' ' + this.props.user.lastName}</Link>
        <button className = "chat" onClick={this.openCloseChat}>Chat</button>
        {nbMessages}
        </div>
        {chatRoom}
        </div>)
    }

}

let mapStateToProps = (state) => {
    return {currentUser: state.currentUser, openedChat: state.openedChat}
  }

  let ConnectedConnectionCardChat = connect(mapStateToProps)(ConnectionCardChat)
  
  export default ConnectedConnectionCardChat;