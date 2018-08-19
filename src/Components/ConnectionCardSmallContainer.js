import React, { Component } from 'react'
import ConnectionCardSmall from './ConnectionCardSmall.js'
import '../CSS/ConnectionCardSmallContainer.css'

class ConnectionCardSmallContainer extends Component {
    constructor() {
        super()
        this.state = {
            connectedUsers: [],
            usersByStyle: [],
            usersByLocation: [],
            randomizerSuggested: [],
            randomizerCriteria: []
        }
        this.renderByConnectedUsers = this.renderByConnectedUsers.bind(this)
        this.renderByStyle = this.renderByStyle.bind(this)
        this.renderByLocation = this.renderByLocation.bind(this)
        
        this.getOtherUserConnections = this.getOtherUserConnections.bind(this)
        this.getSuggestedUsersByLocation = this.getSuggestedUsersByLocation.bind(this)
        this.getSuggestedUsersByStyle = this.getSuggestedUsersByStyle.bind(this)
    }
    componentDidMount() {
        if (this.props.which === "style") { 
        this.getSuggestedUsersByStyle()
         console.log("test")
        }
        
        if (this.props.which === "location") {
        this.getSuggestedUsersByLocation()
        }
        if (this.props.which === "connections") {
        this.getOtherUserConnections()
        console.log("otherTest")
         }
    }

    getSuggestedUsersByStyle() {
        let bod = JSON.stringify({ styles: "experimental" })
        fetch('/getUsersByCriteria', {
            method: 'POST',
            credentials: 'same-origin',
            body: bod
        })
            .then(x => x.text())
            .then(responseBody => {
                let parsedBody = JSON.parse(responseBody)
                if (parsedBody.success === true) {
                    let maxNumber = parseInt(this.props.number)
                    let users = [...parsedBody.result]
                    if (maxNumber >= users.length) {
                        maxNumber = users.length
                    }
                    let ranArr = []
                    for (let i = 0; ranArr.length < maxNumber; i++) {
                        let ran = Math.floor(Math.random() * maxNumber)
                        if (ranArr.indexOf(ran) < 0) {
                            ranArr = ranArr.concat(ran)
                        }
                    }
                    this.setState({ usersByStyle: parsedBody.result, randomizerCriteria: ranArr })

                } else {
                    console.log("invalid userId")
                }
            })
        
        }
    

    getSuggestedUsersByLocation() {
        let bod = JSON.stringify({ location: "Montreal" })
        fetch('/getUsersByCriteria', {
            method: 'POST',
            credentials: 'same-origin',
            body: bod
        })
            .then(x => x.text())
            .then(responseBody => {
                let parsedBody = JSON.parse(responseBody)
                if (parsedBody.success === true) {
                    let maxNumber = parseInt(this.props.number)
                    let users = [...parsedBody.result]
                    if (maxNumber >= users.length) {
                        maxNumber = users.length
                    }
                    let ranArr = []
                    for (let i = 0; ranArr.length < maxNumber; i++) {
                        let ran = Math.floor(Math.random() * maxNumber)
                        if (ranArr.indexOf(ran) < 0) {
                            ranArr = ranArr.concat(ran)
                        }
                    }
                    this.setState({ usersByLocation: parsedBody.result, randomizerCriteria: ranArr })

                } else {
                    console.log("invalid userId")
                }
            })
        }
    
    
        

    getOtherUserConnections() {
        let bod = JSON.stringify({userId: "gWfAnyUoADT0hokf23dx5Hx1eMh2"})
        
        fetch('/getConnectionsByUserId', {
            method: 'POST',
            credentials: 'same-origin',
            body: bod
            
        })
            .then(x => x.text())
            .then(responseBody => {
                let parsedBody = JSON.parse(responseBody)
                console.log(bod)
                console.log(parsedBody);
                if (parsedBody.success === true) {
                    //this.setState({connectedUsers: parsedBody.connectedUsers[0]
                    let maxNumber = parseInt(this.props.number)
                    let users = [...parsedBody.connectedUsers]
                    if (maxNumber >= users.length) {
                        maxNumber = users.length
                    }
                    let ranArr = []
                    for (let i = 0; ranArr.length < maxNumber; i++) {
                        let ran = Math.floor(Math.random() * maxNumber)
                        if (ranArr.indexOf(ran) < 0) {
                            ranArr = ranArr.concat(ran)
                        }
                    }
                    this.setState({ connectedUsers: parsedBody.connectedUsers, randomizerSuggested: ranArr })
                    console.log(this.state.connectedUsers)

                } else {
                    console.log("invalid userId")
                    
                }
            })
    }

    renderByConnectedUsers() {
    let user;
        return this.state.randomizerSuggested.map(ran => {
            user = this.state.connectedUsers[ran]
            console.log(user)
            
        return (
            <ConnectionCardSmall
                name={user.firstName + " " + user.lastName}
                location={user.location}
                styles ={user.styles}
            />)})
        }
    
    renderByStyle(){
        let user;
        return this.state.randomizerCriteria.map(ran => {
           user = this.state.usersByStyle[ran]
          console.log(user)  
           
        return (
                <ConnectionCardSmall
                    name={user.firstName + " " + user.lastName}
                    location={user.location}
                    styles ={user.styles}
                    connections = {user.connections.length}
                />
              
            )})
        }
        
    renderByLocation(){
        let user;
        return this.state.randomizerCriteria.map(ran => {
               user = this.state.usersByLocation[ran]
              console.log("hello")  
               
            return (
                    <ConnectionCardSmall
                        name={user.firstName + " " + user.lastName}
                        location={user.location}
                        styles ={user.styles}
                    />
                  
                )})
            }
    
    

    render() {
        return (
          
            <div className="smallContainer">
                {this.state.usersByLocation.length >0?this.renderByLocation():null}
                {this.state.usersByStyle.length >0?this.renderByStyle():null}
                {this.state.connectedUsers.length >0?this.renderByConnectedUsers():null}

            </div>
            
        )
    }
}

export default ConnectionCardSmallContainer;