import React, { Component } from 'react'
import '../CSS/Homepage.css'
import {Link} from 'react-router-dom'
import ConnectionCardLarge from './ConnectionCardLarge.js'
import COMPONENTTEMPLATE from '../COMPONENTTEMPLATE.js'

import ConnectionCardSmallContainer from './ConnectionCardSmallContainer';
    
class Homepage extends Component {
    render() {
        return (
            <div className='homepage'>
            <div className = "title">Suggested Connections</div>
            <div className = "spaceOut"><ConnectionCardSmallContainer which="specific" number='4'/></div>

            {/* <ConnectionCardLarge src="Images/guy1.jpg"/>
            <br/>
            <ConnectionCardLarge src="Images/guy1.jpg"/>
            <br/>
            <ConnectionCardLarge src="Images/guy1.jpg"/> */}

            <h4>Suggestions by style</h4>
            <div className = "spaceOut"><ConnectionCardSmallContainer which="style" spec="experimental" number='4'/></div>
            <h4>Suggestions by location</h4>
            <div className = "spaceOut"><ConnectionCardSmallContainer which="seeking" spec="gig" number='4'/></div>          
            </div>
        );
    }
}

export default Homepage;