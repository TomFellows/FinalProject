import React, { Component } from 'react'
import ConnectionLargeProfilePic from './ConnectionLargeProfilePic.js'
import '../CSS/ConnectionCardLarge.css'

class ConnectionCardLarge extends Component {
    render() {
        return (
            <div className='individualProfile'>
                <ConnectionLargeProfilePic src="Images/Eminem.jpg" />
                <div class="container">
                    <div class="row">Name: Eminem</div>
                    <div class="row">Location: Los Angeles, CA</div>
                    <div class="row">Overall Rating: 4</div>
                    <div class="row">Instruments: Drums</div>
                    <div class="row">Looking for: dkdkdkdkdkdkdkdkdkdkdkdkd</div>
                </div>
            </div>

        )
    }
}

export default ConnectionCardLarge;