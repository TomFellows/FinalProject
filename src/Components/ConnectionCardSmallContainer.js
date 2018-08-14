import React, { Component } from 'react'
import ConnectionCardSmall from './ConnectionCardSmall.js'
import '../CSS/ConnectionCardSmallContainer.css'

class ConnectionCardSmallContainer extends Component {
    render() {
        return (
            <div class="smallContainer">
            
                <div class="row">
                    <div class="col-sm-6"><ConnectionCardSmall/></div>
                    <div class="col-sm-6"><ConnectionCardSmall/></div>
                </div>
                <div class="row">
                    <div class="col-sm-6"><ConnectionCardSmall/></div>
                    <div class="col-sm-6"><ConnectionCardSmall/></div>
                </div>
            </div>
        )
    }
}

export default ConnectionCardSmallContainer;