import React, { Component } from 'react'
import '../CSS/ConnectionCardSmall.css'
import { connect } from 'tls';


class ConnectionCardSmall extends Component {
    constructor() {
        super()
        this.state = {
            connectedUsers: []
        }
        this.getOtherUserConnections = this.getOtherUserConnections.bind(this)
    }
    componentDidMount() {
       // if (this.props.key === "otherUserProfile") {
            this.getOtherUserConnections()
       // }
    }


    getOtherUserConnections() {
       // let bod = JSON.stringify({this.props.user})
        let bod = JSON.stringify({ userId: 12345 })
        fetch('/getAllConnections', {
            method: 'POST',
            credentials: 'same-origin',
            body: bod

        })
            .then(x => x.text())
            .then(responseBody => {
                let parsedBody = JSON.parse(responseBody)
                // console.log(bod)
                // console.log(parsedBody);
                if (parsedBody.success === true) {
                    //this.setState({connectedUsers: parsedBody.connectedUsers[0]
                    // let connectedUsersArr = []
                    // parsedBody.connectedUsers.map(user => {
                    //     connectedUsersArr =connectedUsersArr.concat(user)
                    this.setState({ connectedUsers: parsedBody.connectedUsers })
                      
                 //   console.log(this.state.connectedUsers[1].firstName)
                } else {
                    console.log("invalid userId")
                }
            })
    }

   
    render() {
        let connectedUsers= this.state.connectedUsers;
        // let connectedUserDisplayed= {}
        // for (let i = 0; i < connectedUsers.length; i++ ) {
         let connectedUserDisplayed = connectedUsers[Math.floor(Math.random()*connectedUsers.length)]
            
        
        console.log(connectedUserDisplayed)
        
        
        return (
            <div className="individualMiniProfile">
                 {/* <div className = "align"><img src= {this.parsedBody.src} className = "connSmallProfilePic"/></div> */}
                <div className="info2">Name: {this.state.connectedUsers.firstName} {this.state.connectedUsers.lastName}</div>
                <div className="info2">Location: {this.state.connectedUsers.location}</div>
                <div className="info2">Overall Rating: {this.state.connectedUsers.overallRating}</div>
            </div>

        )
    }
}

export default ConnectionCardSmall;