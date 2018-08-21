import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom'
import '../CSS/Notification.css'
import { OPENCHAT } from '../ACTIONS';
import {connect} from 'react-redux'



class Notif extends Component {

    constructor (props) {
        super(props);

        this.state = {read: this.props.read}
    }

    read = () => {
        
        let id = this.props.notificationId

        if (this.state.read === false) {
        this.setState({read: true})

        fetch('/readNotification', {
            method: 'POST',
            body: JSON.stringify({notificationId: id})
        })
        
        }
    }

    

    openChat = (event) => {
        event.preventDefault()
        this.props.setOpenChat(this.props.username)
    }


    render () {

        let notificationMessage = '';
        let notificationState = '';

        if (this.props.type === "message") {notificationMessage = ' sent you a message.'}
        if (this.props.type === 'contact') {notificationMessage = ' added you as a contact.'}
        if (this.props.type === 'review') {notificationMessage = ' added a review about ' }

        if (this.state.read === true) {notificationState = 'readNotification'}
        else {notificationState = 'unreadNotification'}

        if (this.props.type === "message") {
            return (<div className='notification'><div className={notificationState} onClick={this.read}>
        <Link to={'/chat:' + this.props.username} onClick={this.openChat}>{this.props.firstName + ' ' + this.props.lastName}</Link> 
        {notificationMessage}</div></div>)
        }

        if (this.props.type === 'review') {
        return (<div className='notification'><div className={notificationState} onClick={this.read}>
        <Link to={'/OtherUserProfile/' + this.props.username}>{this.props.firstName + ' ' + this.props.lastName}</Link> 
        {notificationMessage}<Link to={'/OtherUserProfile/' + this.props.currentUser.username}>you</Link>.</div></div>)
        }


        return (<div className='notification'><div className={notificationState} onClick={this.read}>
        <Link to={'/OtherUserProfile/' + this.props.username}>{this.props.firstName + ' ' + this.props.lastName}</Link> 
        {notificationMessage}</div></div>)
    }


}

let mapStateToProps = (state) => {
  return {currentUser: state.currentUser, popUp: state.popUp, connected: state.connected}
}

let mapDispatchToProps = (dispatch) => {
  return {setOpenChat: (user) => dispatch({type: OPENCHAT, user: user})
  }
}

let ConnectedNotif = connect(mapStateToProps,mapDispatchToProps)(Notif)

export default withRouter(ConnectedNotif);