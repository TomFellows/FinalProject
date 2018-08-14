import React, { Component } from 'react'
import ConnectionCardSmall from './ConnectionCardSmall.js'
import '../CSS/ConnectionCardSmallContainer.css'

class ConnectionCardSmallContainer extends Component {
    render() {
        return (
            <div class="smallContainer">
            
                <div className = "row" class="row">
                    <div className = "profile2"><ConnectionCardSmall src="Images/guy1.jpg"/></div>
                    <div className = "profile2"><ConnectionCardSmall src="Images/guy1.jpg"/></div>
                </div>
                <div className = "row" class="row">
                    <div className = "profile2"><ConnectionCardSmall src="Images/guy1.jpg"/></div>
                    <div className = "profile2"><ConnectionCardSmall src="Images/guy1.jpg"/></div>
                </div>
            </div>
        )
    }
}

export default ConnectionCardSmallContainer;