import React, { Component } from 'react'
import '../CSS/ConnectionCardChat.css'

class ConnectionCardChat extends Component {

    render() {

        return(<div className='connectionCardChat'><img src='/Images/Eminem.jpg' className='contactChatPic'/>
        {this.props.firstName + ' ' + this.props.lastName + ' - user Id: ' + this.props.connectionUserId}
        </div>)
    }

}

export default ConnectionCardChat