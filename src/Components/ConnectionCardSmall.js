import React, { Component } from 'react' 
import '../CSS/ConnectionCardSmall.css'
import { connect } from 'tls';


class ConnectionCardSmall extends Component {

    render() {
        
        return (
            <div className="individualMiniProfile">
                 {/* <div className = "align"><img src= {this.parsedBody.src} className = "connSmallProfilePic"/></div> */}
                <div className="info2">Name: {this.props.name}</div>
                <div className="info2">Location: {this.props.location}</div>
                <div className="info2">Overall Rating: {this.props.overallRating}</div>
            </div>

        )
    }
}

export default ConnectionCardSmall;