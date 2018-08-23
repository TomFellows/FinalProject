import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../CSS/Profile.css'
import {Link, withRouter} from 'react-router-dom'



class Profile extends Component {


    render() {

      let seeking, instruments, styles

      if (this.props.currentUser.instruments.length > 0) {
      let instStr = this.props.currentUser.instruments.join(", ")
      let instArr = instStr.split("")
      instruments = instArr[0].toUpperCase() + instArr.splice(1).join("")
      }

      if (this.props.currentUser.styles.length > 0) {
      let styleStr = this.props.currentUser.styles.join(", ")
      let styleArr = styleStr.split("")
      styles = styleArr[0].toUpperCase() + styleArr.splice(1).join("")
      }

      if (this.props.currentUser.seeking.length > 1) {
      let seekingStr = this.props.currentUser.seeking.join(", ")
      let seekingArr = seekingStr.split("")
      seeking = seekingArr[0].toUpperCase() + seekingArr.splice(1).join("")
      }
    
      let skillStr = this.props.currentUser.skillLevel
 
      let skillLevel = skillStr[0].toUpperCase() + skillStr.slice(1)

        return <div className = "profile">
          <Link to={'/OtherUserProfile/' + this.props.currentUser.username}>
          <img src={this.props.currentUser.image} className="profilePic"/></Link>
                <br/>
                <br/>

    <div class="accordion" id="accordionExample">


     {/* <div className = "info">
        <button className = "btn"  type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Bio
        </button>
      </div> */}
 

    {/* <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body"> */}
      <h1 className = "profileName">
       {this.props.currentUser.firstName}&nbsp;{this.props.currentUser.lastName}
       </h1>
      {/* </div>
    </div> */}
  

    <div className = "info">
        <button className = "btn" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Instruments
        </button>
    </div>
    


    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body">
       {instruments}
      
      </div>
    </div>


    <div className = "info">
        <button className = "btn" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Styles 
        </button>
    </div>

    
    


    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div className="card-body">
       {styles}
      </div>
    </div>


    <div className = "info">
        <button className = "btn" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
          Skill Level
        </button>
    </div>

    
    


    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
      <div className="card-body">
       {skillLevel}
      </div>
    </div>


     <div className = "info">
        <button className = "btn" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
          Location
        </button>
    </div>

    <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
      <div className="card-body">
       {this.props.currentUser.location}
      </div>
    </div>


     <div className = "info">
        <button className = "btn" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
        Seeking
        </button>
    </div>

    <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
      <div className="card-body">
       {seeking}
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
  
  export default withRouter(ConnectedProfile);
