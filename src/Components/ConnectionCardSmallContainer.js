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
        this.renderSmallContainer = this.renderSmallContainer.bind(this)
        this.getOtherUserConnections = this.getOtherUserConnections.bind(this)
        this.getSuggestedUsers = this.getSuggestedUsers.bind(this)
    }
    componentDidMount() {
        if (this.props.which === "style" || this.props.which === "seeking") {
         this.getSuggestedUsers()
         console.log("test")
        }
        if (this.props.which === "connections") {
        this.getOtherUserConnections()
        console.log("otherTest")
         }
    }

    getSuggestedUsers() {
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
         
        if(this.props.which === "seeking") {
        let bod = JSON.stringify({ seeking: "gig" })
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


                } else {
                    console.log("invalid userId")
                }
            })
    }

    renderSmallContainer() {
    let user;
       if( this.props.which === "connections"){
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
              
        if (this.props.which === "style") {
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
        if (this.props.which === "seeking") {
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