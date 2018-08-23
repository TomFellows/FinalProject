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
            {/* <Link to='/Profile'>My profile</Link> */}
            
            <div className = "title">Suggested Connections</div>
            {/* <div className = "spaceOut"><ConnectionCardSmallContainer which="specific" number='4'/></div> */}

            {/* <ConnectionCardLarge src="Images/guy1.jpg"/>
            <br/>
            <ConnectionCardLarge src="Images/guy1.jpg"/>
            <br/>
            <ConnectionCardLarge src="Images/guy1.jpg"/> */}

            <div className="connectionsTitle">..based on a shared style</div>
            <div className = "spaceOut"><ConnectionCardSmallContainer which="style" spec="experimental" number='4'/></div>
            <div className="connectionsTitle">..based on a shared location</div>
            <div className = "spaceOut"><ConnectionCardSmallContainer which="location" spec="gig" number='4'/></div>          
            </div>
       );
    }
}

export default Homepage;