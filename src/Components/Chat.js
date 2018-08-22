import React, { Component } from 'react';
import socketIO from 'socket.io-client'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import '../CSS/Chat.css'

var socket = '';

class Chat extends Component {

    constructor () {
        super ()

        this.chatBox 
        this.state = {inputValue: '', messages: []}
    }

    componentDidMount = () => {


        this.chatBox = document.getElementById('chatBox')

        this.getMessage = this.getMessage.bind(this);
        this.getServerMessage = this.getServerMessage.bind(this)
        this.getPreviousMessages = this.getPreviousMessages.bind(this)
       
        socket = this.props.socket

        socket.on('message', this.getMessage);
        socket.on('serverMessage', this.getServerMessage);
        socket.on('previousMessages', this.getPreviousMessages)

        socket.emit('enterChat', {roomName: this.props.roomInfos.name})

        
    }


    getPreviousMessages = (msg) => {
        if (msg.roomName === this.props.roomInfos.name) {
            this.setState({messages: msg.messages})
            }
        
        this.updateScroll()
    }
    
    getMessage = (msg) => {
        if (msg.roomName === this.props.roomInfos.name) {
        this.setState({messages: this.state.messages.concat({content: msg.content, userId: msg.userId})})
        }

        this.updateScroll()
    }

    getServerMessage = (msg) => {
        if (msg.roomName === this.props.roomInfos.name) {
        this.setState({messages: this.state.messages.concat({content: msg.content, userId: msg.userId})})
        }

        this.updateScroll()
    }

    updateScroll = () => {
        this.chatBox.scrollTop = this.chatBox.scrollHeight
    }


    handleChange = (event) => {
        this.setState({inputValue: event.target.value})
    }

    sendMessage = (event) => {
        event.preventDefault()
        if (this.state.inputValue.length > 0) {
        socket.emit('message', {roomName: this.props.roomInfos.name, content: this.state.inputValue})
        this.setState({inputValue: ''})
        }

    }


 

    render () {

        let currentUserId = this.props.currentUser.userId
        let otherUserId = this.props.otherUserId

        let mappedMessages = this.state.messages.map(item => {
            
            let type;
            let align;


            if (item.userId === 'server') {
                type = 'serverMessage'
                align = 'left'
            } else {
                type = 'chatLine'
                align = 'left'

                if (item.userId === currentUserId) {
                    align = 'right'
                } 
            }
            
            return (<div className={'listItem ' + align}><div className={type}>{item.content}</div></div>)})

        
        

        return(<div className='chat'>

            <div className='list' id='chatBox'>{mappedMessages}</div>
            <form onSubmit={this.sendMessage}>
                <input placeholder = "Type a message..." className='inputText' type='text' value={this.state.inputValue} onChange={this.handleChange}/>
                <input className='inputSubmit' value='Send' type='submit'/>
            </form>     
        </div>)
    }
}

let mapStateToProps = (state) => {
    return {currentUser: state.currentUser}
  }

  let ConnectedChat = connect(mapStateToProps)(Chat)
  
  export default withRouter(ConnectedChat);