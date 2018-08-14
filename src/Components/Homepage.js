import React, { Component } from 'react'
import '../CSS/Homepage.css'
import ConnectionCardLarge from './ConnectionCardLarge.js'
import COMPONENTTEMPLATE from '../COMPONENTTEMPLATE.js'

import ConnectionCardSmallContainer from './ConnectionCardSmallContainer';

class Homepage extends Component {
    render() {
        return (
            <div className="area">
            <div className = "title">Suggested Connections</div>
            <ConnectionCardLarge src="Images/guy1.jpg"/>
            <br/>
            <ConnectionCardLarge src="Images/guy1.jpg"/>
            <br/>
            <ConnectionCardLarge src="Images/guy1.jpg"/>
           
            <div className = "spaceOut"><ConnectionCardSmallContainer/></div>
            </div>
        );
    }
}

export default Homepage;