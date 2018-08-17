import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../CSS/ConnectionCardChat.css'

class ConnectionCardChat extends Component {

    render() {

        return(<div className='connectionCardChat'><Link to={'/OtherUserProfile/' + this.props.username}><img src='/Images/Eminem.jpg' className='contactChatPic'/>
        {this.props.firstName + ' ' + this.props.lastName}</Link>
        </div>)
    }

}

export default ConnectionCardChat