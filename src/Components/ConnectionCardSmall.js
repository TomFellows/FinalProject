import React, { Component } from 'react'
import '../CSS/ConnectionCardSmall.css'


class ConnectionCardSmall extends Component {
    render() {
        return (
            <div className="individualMiniProfile">
                <div className = "align"><img src= {this.props.src} className = "connSmallProfilePic"/></div>
                <div className = "info2">Name: Geddy Lee</div>
                <div className = "info2">Location: Los Angeles, CA</div>
                <div className = "info2">Overall Rating: 5</div>
            </div>

        )
    }
}

export default ConnectionCardSmall;