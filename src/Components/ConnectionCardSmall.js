import React, { Component } from 'react'
import ConnectionSmallProfilePic from './ConnectionSmallProfilePic.js'
import '../CSS/ConnectionCardSmall.css'

class ConnectionCardSmall extends Component {
    render() {
        return (
            <div className="individualMiniProfile">
                <div><ConnectionSmallProfilePic src="Images/geddyLee.jpg"/></div>
                <div>Name: Geddy Lee</div>
                <div>Location: Los Angeles, CA</div>
                <div>Overall Rating: 5</div>
            </div>

        )
    }
}

export default ConnectionCardSmall;