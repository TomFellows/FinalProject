import React, { Component } from 'react'
import '../CSS/OtherUserProfile.css'
import Image from './Image'
// import PopUpWindow from './PopUpWindow.js'
// import PostReview from './PostReview.js'
// import '../CSS/PopUpWindow.css'

class OtherUserProfile extends Component {
    constructor() {
        super()
            this.setState = {popUp: false}
        }
    
        popUp = (event)  => {
            this.setState({popUp: event.target.value})
        }
    
       
    render() {
        popUp = (<PopUpWindow><PostReview/></PopUpWindow>)

        return (<div>
            <div className="area">
            <h1 className = "name">
                FirstName LastName
            </h1>
        <div className = "parent">

            <div className = "profileInfo">
            someguy@gmail.com
            </div>
            <div className = "profileInfo">
            514-123-4567
            </div>
            <div className = "profileInfo">
            More info More info More info 
            </div>
            <div className = "profileInfo">
            More info More info More info
            </div>
            <div className = "profileInfo2">
               Overall score
               
            </div>
       
        
            <button className = "connect">Connect</button>
        </div>x
            <Image src = "Images/guy1.jpg"/>
            <h2 className ="reminder">
                INSERT ConnectionCardSmall Components
            </h2>
        </div>
            <div className = "progress">
                <div className="rating" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" ariaValuenow= '30' ariaValuemin='0' ariaValuemax='100' style={{width: '70%'}} ></div>     
            </div>
            
        <div>
            <button className="postReview" onClick={this.popUp} value='PostReview'> Review </button>
            {/* <Reviews/> */}
        </div>
        </div>
       



        );
    }
}

export default OtherUserProfile;