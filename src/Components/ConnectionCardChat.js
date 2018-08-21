import React, { Component } from 'react'
import socketIO from 'socket.io-client'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Chat from './Chat.js'
import '../CSS/ConnectionCardChat.css'
import { OPENCHAT } from '../ACTIONS.js';

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
        
        if (this.props.socket) {
        socket = this.props.socket

        socket.emit('room', roomInfos);
        }

    }


   

    openCloseChat = () => {

        if (this.state.chatIsOpen === false && this.props.openedChat != this.props.user.username ) {

            this.props.resetMessages(this.props.roomInfos.name)
            this.props.setOpenChat(undefined)
            this.setState({chatIsOpen: true})

        } else {
            this.props.resetMessages(this.props.roomInfos.name)
            this.props.setOpenChat(undefined)
            this.setState({chatIsOpen: false})
        }
       

    }

    

    render() {
        
        let chatRoom = ''
        let nbMessages = (<div></div>)
        

        if (this.state.chatIsOpen === true || this.props.openedChat === this.props.user.username) {

            chatRoom = <Chat roomInfos={this.props.roomInfos} socket={socket}/>

        } else {

            if (this.props.nbMessages > 0) {
                nbMessages = <div className='nbMessages' onClick={this.openCloseChat}>
                {this.props.nbMessages}</div>
            }
        }

        

        return(<div><div className='connectionCardChat'>
        <Link className = "link" to={'/OtherUserProfile/' + this.props.user.username}>
        <img src={this.props.user.image} className='contactChatPic'/>
        {this.props.user.firstName + ' ' + this.props.user.lastName}</Link>
        <div onClick={this.openCloseChat}  className='chatIcon'><img src='/Images/chatIconWhite.png'/></div>
        {nbMessages}
        </div>
        {chatRoom}
        </div>)
    }

}

let mapStateToProps = (state) => {
    return {currentUser: state.currentUser, openedChat: state.openedChat}
  }

  let mapDispatchToProps = (dispatch) => {
    return {setOpenChat: (user) => dispatch({type: OPENCHAT, user: user})
    }
  }

  let ConnectedConnectionCardChat = connect(mapStateToProps, mapDispatchToProps)(ConnectionCardChat)
  
  export default ConnectedConnectionCardChat;