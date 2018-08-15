import React, { Component } from 'react'
import Filters from './Filters.js'
import ConnectionCardLarge from './ConnectionCardLarge.js'

class FindConnections extends Component {

    constructor () {
        super()
    }

    render () {

        return(<div style={{marginTop: '40px'}}>
            <div>
            <p>
                <button type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Open filters
                </button>
            </p>
            <div class="collapse" id="collapseExample">
                <div class="card card-body">
                <Filters/>
             </div>
            </div>
            </div>
            
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