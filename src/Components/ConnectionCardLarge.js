import React, { Component } from 'react'
import '../CSS/ConnectionCardLarge.css'
import '../CSS/ConnectionLargeProfilePic.css'

class ConnectionCardLarge extends Component {
    render() {
        return (
            <div className='individualProfile'>
                <img src = {this.props.src} className = "connProfilePic"  />
                <div class="container">
                    <div class="row">Name: Eminem</div>
                    <div class="row">Location: Los Angeles, CA</div>
                    <div class="row">Overall Rating: 4</div>
                    <div class="row">Instruments: Drums</div>
                    <div class="row">Looking for: Guitarist</div>
                </div>
            </div>

        )
    }
}

export default ConnectionCardLarge;