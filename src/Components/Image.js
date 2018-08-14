import React, { Component } from 'react';
import '../CSS/Profile.css'



class Image extends Component {
    render() {
        return <div>
            <img src={this.props.src} className="profilePic2">
            </img>
            </div>

  }
}

export default Image;