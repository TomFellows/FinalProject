import React, { Component } from 'react'
import '../CSS/Homepage.css'
import ConnectionCardLarge from './ConnectionCardLarge.js'
import COMPONENTTEMPLATE from '../COMPONENTTEMPLATE.js'

class Homepage extends Component {
    render() {
        return (
            <div className="area">
            <div className = "title">Suggested Connections</div>
            <ConnectionCardLarge/>
            <ConnectionCardLarge/>
            <ConnectionCardLarge/>
            <COMPONENTTEMPLATE/>
            </div>
        );
    }
}

export default Homepage;