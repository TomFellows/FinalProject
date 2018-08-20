import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom'



class Notif extends Component {

    constructor () {
        super();

        this.state = {read: this.props.read}
    }

    read = () => {

        if (this.state.read === false) {
        this.setState({read: true})
        }
    }


    render () {

        let notificationMessage = '';
        let notificationState = '';

        if (this.props.type === 'message') {notificationMessage = ' sent you a message.'}
        if (this.props.type === 'contact') {notificationMessage = ' added you as a contact.'}
        if (this.props.type === 'review') {notificationMessage = ' added a review about you.'}

        if (this.props.read === true) {notificationState = 'readNotification'}
        else {notificationState = 'unreadNotification'}


        return (<div className='notification'><div className={notificationState} onClick={this.read}><Link to={'/OtherUserProfile/' + this.props.username}>{this.props.firstName + ' ' + this.props.lastName}</Link> 
        {notificationMessage}</div></div>)
    }


}

export default withRouter(Notif)