import React, { Component } from 'react';
import Notif from './Notification.js'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'



class NotificationsList extends Component {

constructor (props) {
    super (props)

    this.state = {notifications: this.props.currentUser.notifications}
}


render () {

    let mappedNotifications = []

    

   mappedNotifications = this.state.notifications.map(item => {

          return (<div><Notif firstName={item.firstName} lastName={item.lastName} username={item.username} 
            type ={item.type} read={item.read} notificationId={item.notificationId}/></div>)
       
      })

      mappedNotifications = mappedNotifications.reverse()      

      if (mappedNotifications.length === 0){
        mappedNotifications = ['No notification']
      }


    return mappedNotifications
}



}

let mapStateToProps = (state) => {
    return {currentUser: state.currentUser, popUp: state.popUp, connected: state.connected}
  }


  
  
let ConnectedNotificationsList = connect(mapStateToProps)(NotificationsList)

export default withRouter(ConnectedNotificationsList);

