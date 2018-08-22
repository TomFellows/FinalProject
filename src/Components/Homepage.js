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
<<<<<<< HEAD
            <Link to='/Profile'>My profile</Link>
            
=======
            {/* <Link to='/Profile'>My profile</Link> */}
>>>>>>> 246a4dad70876a870c10eb3a2f5411e804de42fe
            <div className = "title">Suggested Connections</div>
            {/* <div className = "spaceOut"><ConnectionCardSmallContainer which="specific" number='4'/></div> */}

            {/* <ConnectionCardLarge src="Images/guy1.jpg"/>
            <br/>
            <ConnectionCardLarge src="Images/guy1.jpg"/>
            <br/>
            <ConnectionCardLarge src="Images/guy1.jpg"/> */}

            <h4>Suggestions by style</h4>
            <div className = "spaceOut"><ConnectionCardSmallContainer which="style" spec="experimental" number='4'/></div>
            <h4>Suggestions by location</h4>
            <div className = "spaceOut"><ConnectionCardSmallContainer which="location" spec="gig" number='4'/></div>          
            </div>
       );
    }
}

export default Homepage;