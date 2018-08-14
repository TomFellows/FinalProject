import React, { Component } from 'react'
import '../CSS/Homepage.css'
import ConnectionCardLarge from './ConnectionCardLarge.js'

class Homepage extends Component {
    render() {
        return (
            <div className="area">
            <div className = "title">Suggested Connections</div>
            <ConnectionCardLarge/>
           
            </div>
        );
    }
}

export default Homepage;