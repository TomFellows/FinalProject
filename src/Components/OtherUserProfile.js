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
        this.getUserProfile = this.getUserProfile.bind(this)
    }

    componentDidMount() {
        this.getUserProfile();
    }
    getUserProfile() {
        let bod = JSON.stringify({userId:3})
    fetch('/getUserById', {
        method: 'POST',
        credentials: 'same-origin',
        body: bod
    })
    .then(x=> x.text())
    .then(responseBody => {
        let parsedBody=JSON.parse(responseBody);
      //  console.log(parsedBody)
    
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
            {this.state.user.seeking}
            </div>
            <div className = "profileInfo">
            {this.state.user.style}
            </div>
            <div className = "profileInfo">
            {this.state.user.instruments} 
            </div>
            <div className = "progress">
                <div className="rating" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" ariaValuenow= '30' ariaValuemin='0' ariaValuemax='100' style={{width: '70%'}} ></div>     
            </div>
            
        </div>
            <Image src = "Images/guy1.jpg"/>
            
                <ConnectionCardSmallContainer/>
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