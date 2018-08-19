import React, { Component } from 'react'
import '../CSS/OtherUserProfile.css'
import Image from './Image'
import PopUpWindow from './PopUpWindow.js'
import PostReview from './PostReview.js'
import '../CSS/PopUpWindow.css'
import {connect} from 'react-redux'
import ConnectionCardSmallContainer from './ConnectionCardSmallContainer';

class OtherUserProfile extends Component {
    constructor() {
        super()
        this.state= {
            user: {},
            text: "Connect"
         }
        this.renderList = this.renderList.bind(this)
        this.getUserProfile = this.getUserProfile.bind(this)
        this.addConnection = this.addConnection.bind(this)
        this.remConnection = this.remConnection.bind(this)
    }
    
    componentDidMount() {
        this.getUserProfile();
    }
    getUserProfile() {
        let bod = JSON.stringify({username: this.props.username})
       
        
    fetch('/getUserByUsername', {
        method: 'POST',
        credentials: 'same-origin',
        body: bod
    })
    .then(x=> x.text())
    .then(responseBody => {
        let parsedBody=JSON.parse(responseBody);
     
    if (parsedBody.success === true) {
         this.setState({user: parsedBody.user})
        console.log(this.state.user.userId)

    } else {
        console.log("invalid userId")
    }
    })
    }

        popUp = (event)  => {
            this.props.dispatch({type: "pop up", popUpType: true})
        }
    renderList(x) {
        return <div>{x}</div>
    }

    addConnection(evt) {
   
        evt.preventDefault();
        console.log(this.props.currentUser)
        
            this.setState({ text: "Disconnect" })
            fetch('/addConnection',
                {
                    method: "POST",
                    credentials: "same-origin",
                    body: (JSON.stringify({ connectionUserId: this.state.user.userId }))
                })
                .then(response => response.text())
                .then(response => {
                    let parsedResponse = JSON.parse(response)
                    console.log(parsedResponse)
                })
            }
       remConnection(){
        
            fetch('/removeConnection',
                {
                    method: "POST",
                    credentials: "same-origin",
                    body: (JSON.stringify({ connectionUserId: this.state.user.userId }))
                })
                .then(response => response.text())
                .then(response => {
                    let parsedResponse = JSON.parse(response)
                    console.log(parsedResponse)
                })
        

                console.log(this.props.currentUser)
       }
    
        


    render() {
    
        return (<div>
            {this.props.popUp?<PopUpWindow><PostReview/></PopUpWindow>:null}
            <div className="area">
            <h1 className = "name">
                {`${this.state.user.firstName} ${this.state.user.lastName}`}
               
            </h1>
        
            <Image src = "Images/guy1.jpg"/>
                <div>
                <h4>Connections</h4>
                
              <ConnectionCardSmallContainer which="connections" userId={this.state.user.userId} number="5"/>
              
                </div>
                <div className = "twoButtons">
                <button className = "connect" onClick = {this.addConnection}>Connect</button>
                <button className = "connect" onClick = {this.remConnection}>Disconnect</button>
                <button className="connect" onClick={this.popUp} value='PostReview'> Review </button>
            </div>
        </div>
            
            
        
        </div>
       



        );
    }
}

let mapStateToProps = (state) => {
    return {popUp: state.popUp,
            currentUser: state.currentUser}
}
let ConnectedOtherUserProfile = connect(mapStateToProps)(OtherUserProfile)
export default ConnectedOtherUserProfile;