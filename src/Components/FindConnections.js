import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import ConnectionCardChat from './ConnectionCardChat.js'


class FindConnections extends Component {

    constructor () {
        super()
    }

    render () {

        let mappedConnections = []


                if (this.props.location.users) {
                mappedConnections = this.props.location.users.map(item => {
                    return (<ConnectionCardChat username={item.username} firstName={item.firstName} lastName={item.lastName}/>)
                })
                }

            

           

        return(<div>
            {mappedConnections}    
                

            </div>

        )


    }

}

export default withRouter(FindConnections)