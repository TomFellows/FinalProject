import React, { Component } from 'react' 
import '../CSS/ConnectionCardSmall.css'
import { connect } from 'tls';
import {Link} from 'react-router-dom'


class ConnectionCardSmall extends Component {
    
    
    render() {
        let styles
        if (this.props.styles.length > 0) {
        let styleStr = this.props.styles.join(", ")
        let styleArr = styleStr.split("")
        styles = styleArr[0].toUpperCase() + styleArr.splice(1).join("")}
        else {
            styles = 'none'
        }
        let bg
        console.log(styles)
        if (Math.ceil(Math.random()*10) <= 2) {
              bg = "/Images/userBackground2.jpg"  
        }
        else if (Math.ceil(Math.random()*10) <= 4) {
            bg = "/Images/userBackground.jpg"  
        }
        else if (Math.ceil(Math.random()*10) <= 6) {
            bg = "/Images/userBackground3.jpg"  
        }
        else if (Math.ceil(Math.random()*10) <= 8) {
            bg = "/Images/userBackground4.jpg"  
        }
        else{
            bg = "/Images/audience.jpg"
        }

        // let styleStrNew = styleArr.join(" ")
        // console.log(styleStrNew)
        
        return (
            <div className="individualMiniProfile">

                 {/* <img src = "/Images/audience.jpg"  className = "connBackgroundPic"/> */}
                 <img src = {bg}  className = "connBackgroundPic"/>
                 <img src ={this.props.image} className = "connProfilePic"/>
                 <div className = "infoCont">
                  {console.log("This is the username",this.props.connections)}
                <Link className = "link" to={'/OtherUserProfile/' + this.props.username}>
                <div className="info2">{this.props.name}</div>
                </Link>

                
                <div className="info3">Styles: {styles}</div>
                <div className="info3">Location: {this.props.location}</div>
                {/* <button className = "connectButton">FOLLOW</button> */}
                <div className = "bottom">
                    <div className = "info4">{this.props.connections}<br/><div className ="info14">Connections</div></div>
                    <div className = "info5">{this.props.rating}<br/><div className ="info15">Rating</div></div>
                </div>
               
                </div>
            </div>

        )
    }
}

export default ConnectionCardSmall;