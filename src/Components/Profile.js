import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../CSS/Profile.css'



class Profile extends Component {


    render() {


        return <div className = "profile">
            <img src={this.props.src} className="profilePic"/>
                <br/>
                <br/>

    <div class="accordion" id="accordionExample">


     <div className = "info">
        <button className = "btn"  type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Bio
        </button>
      </div>
 

    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
       {this.props.currentUser.firstName}&nbsp;{this.props.currentUser.lastName}
      </div>
    </div>
  

    <div className = "info">
        <button className = "btn" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Instruments
        </button>
    </div>


    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body">
       {this.props.currentUser.instruments}
      </div>
    </div>

          </div>

        </div>

      }
  }

  let mapStateToProps = (state) => {
    return {currentUser: state.currentUser, popUp: state.popUp}
  }
  
 
  
  let ConnectedProfile = connect(mapStateToProps)(Profile)
  
  export default ConnectedProfile;
