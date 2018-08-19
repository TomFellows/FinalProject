import React, { Component } from 'react';
import {connect} from 'react-redux'
import ConnectionCardChat from './ConnectionCardChat.js'
import '../CSS/ConnectionsSidebar.css'
import { SETCURRENTCONNECTIONS } from '../ACTIONS.js';




class ConnectionsSidebar extends Component {

    constructor() {
        super()

        this.componentDidMount = this.componentDidMount.bind(this)
        
    }

    componentDidMount () {
        fetch('/getAllConnections', {
            credentials: 'same-origin'
        }).then(response => response.text())
            .then(response => {

                let parsedResponse = JSON.parse(response)

                if (parsedResponse.connectedUsers) {
                
                let connections = parsedResponse.connectedUsers

                this.props.setCurrentConnections(connections)
                }
        })

    }


    render() {

        let mappedConnections = []


        
                mappedConnections = this.props.currentConnections.map(item => {
                    return (<ConnectionCardChat user={item}/>)
                })

            

            return (
                <div className='sidebar'>
                    <div className="header">CHAT</div>
                    {mappedConnections}
                </div>)

    }
}

let mapStateToProps = (state) => {
    return {currentUser: state.currentUser, currentConnections: state.currentConnections, popUp: state.popUp}
  }

  let mapDispatchToProps = (dispatch) => {
    return {setCurrentConnections: (connections) => dispatch({type: SETCURRENTCONNECTIONS, connections: connections})
    }
  }

  
  let ConnectedConnectionsSidebar = connect(mapStateToProps, mapDispatchToProps)(ConnectionsSidebar)
  
  export default ConnectedConnectionsSidebar;