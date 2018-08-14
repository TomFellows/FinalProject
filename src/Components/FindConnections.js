import React, { Component } from 'react'
import Filters from './Filters.js'
import ConnectionCardLarge from './ConnectionCardLarge.js'

class FindConnections extends Component {

    constructor () {
        super()
    }

    render () {

        return(<div>
            <Filters/>
            <ConnectionCardLarge src="Images/guy1.jpg"/>
            <br/>
            <ConnectionCardLarge src="Images/guy1.jpg"/>
            <br/>
            <ConnectionCardLarge src="Images/guy1.jpg"/>
            </div>

        )


    }

}

export default FindConnections