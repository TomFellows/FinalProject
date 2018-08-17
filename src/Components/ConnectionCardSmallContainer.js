import React, { Component } from 'react'
import ConnectionCardSmall from './ConnectionCardSmall.js'
import '../CSS/ConnectionCardSmallContainer.css'

class ConnectionCardSmallContainer extends Component {
    constructor() {
        super()
        this.state = {
            connectedUsers: [],
            randomizer: []
        }
        this.renderSmallContainer = this.renderSmallContainer.bind(this)
        this.getOtherUserConnections = this.getOtherUserConnections.bind(this)
    }
    componentDidMount() {
       // if (this.props.key === "otherUserProfile") {
            this.getOtherUserConnections()
       // }
    }


    getOtherUserConnections() {
       // let bod = JSON.stringify({this.props.user})
        let bod = JSON.stringify({ userId: 12345 })
        fetch('/getAllConnections', {
            credentials: 'same-origin',

        })
            .then(x => x.text())
            .then(responseBody => {
                let parsedBody = JSON.parse(responseBody)
                // console.log(bod)
                // console.log(parsedBody);
                if (parsedBody.success === true) {
                    //this.setState({connectedUsers: parsedBody.connectedUsers[0]
                    let maxNumber = parseInt(this.props.number)
                    let users = [...parsedBody.connectedUsers]
                    if(maxNumber >= users.length) {
                        maxNumber = users.length
                    }
                    let ranArr= []
                    for(let i = 0; ranArr.length < maxNumber; i++){
                        let ran = Math.floor(Math.random()*maxNumber )
                        if(ranArr.indexOf(ran) <0){
                            ranArr=ranArr.concat(ran)
                        }
                    }
                    this.setState({ connectedUsers: parsedBody.connectedUsers, randomizer: ranArr })
                    console.log(parsedBody.connectedUsers, ranArr)  
                
                } else {
                    console.log("invalid userId")
                }
            })
    }

    renderSmallContainer() {
        return this.state.randomizer.map(ran=> {
            let user = this.state.connectedUsers[ran]
            console.log(this.state.randomizer)
            return (
                <ConnectionCardSmall 
                name={user.firstName + " " + user.lastName} 
                location={user.location}
                styles={user.styles}
            /> 
        )})
   }
   
    render() {
    
          return (
            <div className="smallContainer">
            {this.renderSmallContainer()}
            </div>
        )
    }
}

export default ConnectionCardSmallContainer;