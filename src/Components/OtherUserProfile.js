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
            user: {}
         }
        this.renderList = this.renderList.bind(this)
        this.getUserProfile = this.getUserProfile.bind(this)
    }

    componentDidMount() {
        this.getUserProfile();
    }
    getUserProfile() {
        let bod = JSON.stringify({userId: this.props.username})
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
       
    render() {
       

        return (<div>
            {this.props.popUp?<PopUpWindow><PostReview/></PopUpWindow>:null}
            <div className="area">
            <h1 className = "name">
                {`${this.state.user.firstName} ${this.state.user.lastName}`}
               
            </h1>
        <div className = "parent">

            <div className = "profileInfo">
            {this.state.user.email}
            </div>
            <div className = "profileInfo">
            {this.state.user.location}
            </div>
            <div className = "profileInfo">
            {this.state.user.seeking?this.state.user.seeking.map(this.renderList):null} 
            </div>
            <div className = "profileInfo">
            {this.state.user.style}
            </div>
            <div className = "profileInfo">
            {this.state.user.experience}
            </div>
            <div className = "profileInfo">
            {this.state.user.instruments?this.state.user.instruments.map(this.renderList):null} 
            </div>
            <div className = "profileInfo">
            {this.state.user.skillLevel} 
            </div>
            <div className = "progress">
                <div className="rating" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" ariaValuenow= '30' ariaValuemin='0' ariaValuemax='100' style={{width: '70%'}} ></div>     
            </div>
            
        </div>
            <Image src = "Images/guy1.jpg"/>
                <div>
                <h4>Connections</h4>
                <ConnectionCardSmallContainer which="connections" number="5"/>
                </div>
                <div className = "twoButtons">
                <button className = "connect">Connect</button>
            <button className="connect" onClick={this.popUp} value='PostReview'> Review </button>
            </div>
        </div>
            
            
        
        </div>
       



        );
    }
}

let mapStateToProps = (state) => {
    return {popUp: state.popUp}
}
let ConnectedOtherUserProfile = connect(mapStateToProps)(OtherUserProfile)
export default ConnectedOtherUserProfile;