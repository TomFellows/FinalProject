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
            {/* <ConnectionCardLarge src="Images/guy1.jpg"/>
            <br/>
            <ConnectionCardLarge src="Images/guy1.jpg"/>
            <br/>
            <ConnectionCardLarge src="Images/guy1.jpg"/> */}
           <Link to='/Profile'>My profile</Link>
            <div className = "spaceOut"><ConnectionCardSmallContainer number='6'/></div>
            </div>
        );
    }
}

export default Homepage;