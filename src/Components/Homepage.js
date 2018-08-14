import React, { Component } from 'react'
import '../CSS/Homepage.css'
import ConnectionCardLarge from './ConnectionCardLarge.js'
import COMPONENTTEMPLATE from '../COMPONENTTEMPLATE.js'

import ConnectionCardSmallContainer from './ConnectionCardSmallContainer';

class Homepage extends Component {
    render() {
        return (
            <div>
            <div className = "title">Suggested Connections</div>
            <ConnectionCardLarge/>
            <ConnectionCardLarge/>
            <ConnectionCardLarge/>
            <div><ConnectionCardSmallContainer/></div>
            </div>
        );
    }
}

export default Homepage;