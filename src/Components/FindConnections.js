import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import ConnectionCardChat from './ConnectionCardChat.js'
import ConnectionCardSmall from './ConnectionCardSmall.js'
import '../CSS/ConnectionCardSmall.css'



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
                    />
                  )
                })
                }

            

           

        return(<div className = "smallCard2">
              {mappedConnections}  
            
            </div>

        )


    }

}

export default withRouter(FindConnections)