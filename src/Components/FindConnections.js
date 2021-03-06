import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import ConnectionCardSmall from './ConnectionCardSmall.js'
import '../CSS/ConnectionCardSmall.css'
import '../CSS/FindConnections.css'



class FindConnections extends Component {

    constructor () {
        super()
    }

    render () {

        let mappedConnections = []
                if (this.props.location.users) {
                    console.log("location.users",this.props.location.users)
                mappedConnections = this.props.location.users.map(item => {

                    return (<ConnectionCardSmall
                        name={item.firstName + " " + item.lastName}
                        location={item.location}
                        styles ={item.styles}
                        connections = {item.connections.length}
                        username = {item.username}
                        rating = {item.userRating}
                        image = {item.image}
                    />
                  )
                })
                }
            
            
            if (mappedConnections.length < 1) {
                mappedConnections = <div>Sorry, no user matches your criterias.</div>
            }

        

           

        return(<div className='findConnections'>
        <div className='title'>Results</div>
            
            <div className = "smallCard2">
            
              {mappedConnections}  
            
            </div></div>

        )


    }

}

export default withRouter(FindConnections)