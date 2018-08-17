import React, { Component } from 'react' 
import '../CSS/ConnectionCardSmall.css'
import { connect } from 'tls';


class ConnectionCardSmall extends Component {

    
    render() {
        let styleStr = this.props.styles.join(", ")
        let styleArr = styleStr.split("")
        
        let styles = styleArr[0].toUpperCase() + styleArr.splice(1).join("")
        console.log(styles)
        // let styleStrNew = styleArr.join(" ")
        // console.log(styleStrNew)
       
        return (
            <div className="individualMiniProfile">
                 <img src = "Images/profbg.jpg"  className = "connBackgroundPic"/>
                 <img src = "Images/shaun.jpg" className = "connProfilePic"/>
                 <div className = "infoCont">
                <div className="info2">{this.props.name}</div>
                <div className="info3">Styles: {styles}</div>
                <div className="info3">Location: {this.props.location}</div>
                <button className = "connectButton">FOLLOW</button>
                </div>
            </div>

        )
    }
}

export default ConnectionCardSmall;