import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Chat from './Chat.js'
import '../CSS/ConnectionCardChat.css'

class ConnectionCardChat extends Component {


    constructor () {

        super ()

        this.state = {chatIsOpen: false}
    }

    openCloseChat = () => {

        if (this.state.chatIsOpen === false) {
            this.setState({chatIsOpen: true})

        } else {
            this.setState({chatIsOpen: false})
        }
       

    }

    

    render() {
        
        let chatRoom = ''
        

        if (this.state.chatIsOpen === true) {

            let chatRoomName = ''

            if (this.props.currentUser.username > this.props.user.username) {
                chatRoomName = this.props.currentUser.username + this.props.user.username
            } else {
                chatRoomName = this.props.user.username + this.props.currentUser.username
            }
            
            let roomInfos = {name: chatRoomName,
                            otherUserId: this.props.user.userId}

            chatRoom = <Chat roomInfos={roomInfos}/>

            }

        

        return(<div><div className='connectionCardChat'>
        <Link className = "link" to={'/OtherUserProfile/' + this.props.user.username}>
        <img src='/Images/tom.jpg' className='contactChatPic'/>
        {this.props.user.firstName + ' ' + this.props.user.lastName}</Link>
        <button className = "chat" onClick={this.openCloseChat}>Chat</button>
        </div>
        {chatRoom}
        </div>)
    }

}

let mapStateToProps = (state) => {
    return {currentUser: state.currentUser}
  }

  let ConnectedConnectionCardChat = connect(mapStateToProps)(ConnectionCardChat)
  
  export default ConnectedConnectionCardChat;