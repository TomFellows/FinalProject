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
            <ConnectionCardLarge/>
            <ConnectionCardLarge/>
            <ConnectionCardLarge/>
            </div>

        )


    }

}

export default FindConnections