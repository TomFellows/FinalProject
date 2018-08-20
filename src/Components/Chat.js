import React, { Component } from 'react';
import socketIO from 'socket.io-client'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import '../CSS/Chat.css'

var socket = '';

class Chat extends Component {

    constructor () {
        super ()

        this.state = {inputValue: '', messages: []}
    }

    componentDidMount = () => {

        socket = socketIO("/")

        let roomInfos = this.props.roomInfos

        socket.on('connect', function() {
            // Connected, let's sign-up for to receive messages for this room
            socket.emit('room', roomInfos);

            
         })

         socket.on('message', this.getMessage);
         socket.on('serverMessage', this.getServerMessage);
            
       
    }

    
    getMessage = (msg) => {
        this.setState({messages: this.state.messages.concat({content: msg.content, userId: msg.userId})})
    }

    getServerMessage = (msg) => {
        this.setState({messages: this.state.messages.concat({content: msg.content, userId: msg.userId})})
    }


    handleChange = (event) => {
        this.setState({inputValue: event.target.value})
    }

    sendMessage = (event) => {
        event.preventDefault()
        socket.emit('message', {room: this.props.roomInfos.name, content: this.state.inputValue.toString()})
        this.setState({inputValue: ''})

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

                if (item.userId === currentUserId) {
                    align = 'right'
                } 
            }
            
            return (<div className='listItem'><div className={align}><div className={type}>{item.content}</div></div></div>)})

        
        

        return(<div className='chat'>

            <div className='list'>{mappedMessages}</div>
            <form onSubmit={this.sendMessage}>
                <input type='text' value={this.state.inputValue} onChange={this.handleChange}/>
                <input type='submit'/>
            </form>     
        </div>)
    }
}

let mapStateToProps = (state) => {
    return {currentUser: state.currentUser}
  }

  let ConnectedChat = connect(mapStateToProps)(Chat)
  
  export default withRouter(ConnectedChat);