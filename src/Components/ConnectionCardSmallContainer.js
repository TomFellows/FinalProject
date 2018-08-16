import React, { Component } from 'react'
import ConnectionCardSmall from './ConnectionCardSmall.js'
import '../CSS/ConnectionCardSmallContainer.css'

class ConnectionCardSmallContainer extends Component {
   

//     getConnectionCardSmall() {
//     let component = []
//     for(let i =0; i <this.props.number; i++) {
//         return component [i];
//     }
// }

    render() {

        

        return (
            <div className="smallContainer">
            
                <div className = "row">
               
                    <div className = "profile2"><ConnectionCardSmall src="Images/guy1.jpg"/></div>
                    <div className = "profile2"><ConnectionCardSmall src="Images/guy1.jpg"/></div>
                </div>
                <div className = "row">
                    <div className = "profile2"><ConnectionCardSmall src="Images/guy1.jpg"/></div>
                    <div className = "profile2"><ConnectionCardSmall src="Images/guy1.jpg"/></div>
                </div>
            </div>
        )
    }
}

export default ConnectionCardSmallContainer;