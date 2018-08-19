import React, { Component } from 'react';
import socketIO from 'socket.io-client'

var socket = '';

class Chat extends Component {

    constructor () {
        super ()

        this.state = {inputValue: '', messages: []}
    }

    componentDidMount = () => {

        socket = socketIO("/")

        let roomName = this.props.roomName

        socket.on('connect', function() {
            // Connected, let's sign-up for to receive messages for this room
            socket.emit('room', roomName);

            
         })

         socket.on('message', this.getMessage);
            
       
    }

    createRoom = () => {
        
    }

    getMessage = (msg) => {
        this.setState({messages: this.state.messages.concat(msg)})
    }


    handleChange = (event) => {
        this.setState({inputValue: event.target.value})
    }

    sendMessage = (event) => {
        event.preventDefault()
        socket.emit('message', {room: this.props.roomName, content: this.state.inputValue.toString()})
        this.setState({inputValue: ''})

    }


 

    render () {

        let mappedMessages = this.state.messages.map(item => (<li>{item}</li>))

        
        

        return(<div>
            <h2>{this.props.roomName}</h2>

            <ul>{mappedMessages}</ul>
            <form onSubmit={this.sendMessage}>
                <input type='text' value={this.state.inputValue} onChange={this.handleChange}/>
                <input type='submit'/>
            </form>     
        </div>)
    }
}

export default Chat