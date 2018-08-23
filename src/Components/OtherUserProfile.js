import React, { Component } from 'react'
import '../CSS/OtherUserProfile2.css'
import '../CSS/ConnectionCardSmall.css'
import Image from './Image'
import PopUpWindow from './PopUpWindow.js'
import { Link } from 'react-router-dom'
import PostReview from './PostReview.js'
import '../CSS/PopUpWindow.css'
import { connect } from 'react-redux'
import ConnectionCardSmallContainer from './ConnectionCardSmallContainer';
import { SETCURRENTUSER, SETCURRENTCONNECTIONS, POPUP } from '../ACTIONS';

class OtherUserProfile extends Component {
    constructor() {
        super()
        this.state = {
            user: {},
            text: "Connect",
            
        }
        this.renderList = this.renderList.bind(this)
        this.getUserProfile = this.getUserProfile.bind(this)
        this.addConnection = this.addConnection.bind(this)
        this.remConnection = this.remConnection.bind(this)
        this.renderReviews = this.renderReviews.bind(this)
        this.renderStars = this.renderStars.bind(this)
        this.setUserAfterUpdate = this.setUserAfterUpdate.bind(this)
        this.setConnectionsAfterUpdate = this.setConnectionsAfterUpdate.bind(this)
    }

    componentDidMount() {
        this.getUserProfile();
    }



    getUserProfile() {
        console.log("1")
      let bod = JSON.stringify({ username: this.props.username })


        fetch('/getUserByUsername', {
            method: 'POST',
            credentials: 'same-origin',
            body: bod
        })
            .then(x => x.text())
            .then(responseBody => {
                let parsedBody = JSON.parse(responseBody);
                console.log("2")
                if (parsedBody.success === true) {
                    this.setState({ user: parsedBody.user })
                    console.log("3")


                } else {
                    console.log("invalid userId")
                }
            })
    }

    renderStars(num){
        let stars = [];
        for(let i = 0; i < num; i++){
            stars = stars.concat("⭐")
        }
        return stars
    }

    popUp = (event) => {
        this.props.showPopUp(event.target.value)
    }

    renderList(x) {
        return <div>{x}</div>
    }

    renderReviews() {
        let reviews;
        let reviewObj;
        let presentedObj;
        console.log("4")
        if (this.state.user.reviews !== undefined) {
            reviews = this.state.user.reviews.map(rev => {
                console.log(rev)
                return [rev.reviewer.username,  rev.review, rev.reviewer.firstName, rev.reviewer.lastName]
                
        
            })
          
            
            if (reviews !== undefined) {
                reviewObj = reviews.map(rev => {
                    console.log("5")
                    return [rev[2], rev[3], rev[1].overall, rev[1].skill, rev[1].reliability, rev[1].comment]
                })
            
            if(reviewObj !== undefined){
                
                // let something
                // for(let i = 0; i < 3; i++){
                //    something = something + <img className = "star" src = "/Images/star.png"></img>
                // }
                // return something
                presentedObj=reviewObj.map(arr => {
                    return (
                        <div className="oneRev">
                        <div>Reviewed by: {`${arr[0]} ${arr[1]}`} | Overall Experience: {this.renderStars(arr[2])}</div>
                       
                        <div>Skill Level: {arr[3]} | Reliability: {this.renderStars(arr[4])}</div>
                        {/* <div>Reliability: {arr[4]}</div> */}
                        <div>Comment: {arr[5]}</div>
                    </div>
                    )
                })
               
            }}                   
            return presentedObj;
        }
        

        console.log("nothing yet")
    }




    addConnection(evt) {

        evt.preventDefault();
        console.log("this is the current username", this.props.username)
        console.log("This is state.user", this.state.user)

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
            .then(this.setUserAfterUpdate)
            .then(this.setConnectionsAfterUpdate)
            

            
    }
    remConnection() {

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
            .then(this.setUserAfterUpdate)
            .then(this.setConnectionsAfterUpdate)
            
    }

    setUserAfterUpdate () {

        fetch('/getCurrentUser', {
          credentials: 'same-origin'
        }).then(response => response.text())
          .then((response) => {
    
            let parsedResponse = JSON.parse(response)
    
            if (parsedResponse.user) {
              let currentUser = parsedResponse.user
    
              this.props.setCurrentUser(JSON.parse(JSON.stringify(currentUser)), 'connected')
          } else {
    
            this.props.setCurrentUser({}, 'landingPage')
          }
    
          })
          .catch((err) => {
    
            let currentUser =  {
                firstName: 'Unavailable', lastName: 'Unavailable', instruments: 'Unavailable',
                location: 'Unavailable', seeking: 'Unavailable', skillLevel: 'Unavailable', musicalStyles: 'Unavailable'
            }
    
            this.props.setCurrentUser(currentUser, 'landingPage')
          })
      
      }

      
      setConnectionsAfterUpdate () {

        fetch('/getAllConnections', {
            credentials: 'same-origin'
        }).then(response => response.text())
            .then(response => {

                let parsedResponse = JSON.parse(response)

                if (parsedResponse.connectedUsers) {
                
                let connections = parsedResponse.connectedUsers

                this.props.setCurrentConnections(connections)
                }
        })
      }




    render() {
        let styles = undefined
        if (this.state.user.styles !== undefined) {
            let styleStr = this.state.user.styles.join(", ")

            let styleArr = styleStr.split("")
            styles = styleArr[0].toUpperCase() + styleArr.splice(1).join("")
        }

        let instruments = undefined
        if (this.state.user.instruments !== undefined) {
            let instStr = this.state.user.instruments.join(", ")

            let instArr = instStr.split("")
            instruments = instArr[0].toUpperCase() + instArr.splice(1).join("")
        }

        let seeking = undefined
        if (this.state.user.seeking !== undefined) {
            let seekStr = this.state.user.seeking.join(", ")

            let seekArr = seekStr.split("")
            seeking = seekArr[0].toUpperCase() + seekArr.splice(1).join("")
        }

        let skillLevel = undefined
        if (this.state.user.skillLevel !== undefined) {
            let skillStr = this.state.user.skillLevel
            skillLevel = skillStr[0].toUpperCase() + skillStr.slice(1)
        }

        let connect = false
        console.log("state.user is" ,this.state.user)
        let id = this.props.currentUser.connections;
        for(let i = 0; i < id.length; i++){
            if(id[i].connectionUserId === this.state.user.userId && this.state.user.userId !== undefined){
                connect = true
            }
        }

        let editLink;
        let otherUsersConnect = (<div className="twoButtons">
        {connect ? <button className="connect" onClick={this.remConnection}>Disconnect</button>: <button className="connect" onClick={this.addConnection}>Connect</button>}
                </div>
           )

        let otherUsersReview = ( <div className="oneButton">
        <button className="connect2" onClick={this.popUp} value='PostReview'> Review </button>
        </div>)
        if (this.state.user.username === this.props.currentUser.username) {
            editLink = <div ><br/>&nbsp;<Link className='editLink' to='/Profile'>Edit profile</Link></div>
           
            otherUsersConnect = ''
            otherUsersReview=''
        }
        



        return (<div>
            {this.props.popUp ? <PopUpWindow><PostReview getUserProfile= {this.getUserProfile} username={this.state.user.username} userId={this.props.currentUser.userId} revieweeId={this.state.user.userId} popUp={this.props.popUp}/></PopUpWindow> : null}
            <div className="area">
            {editLink}
                <div className = "flex2">
                
                <h1 className="name">
                    {`${this.state.user.firstName} ${this.state.user.lastName} `} 
                </h1>
            
               
                <h10 className = "name2">
                    {this.state.user.experience}
                </h10>
                <img src={this.state.user.image} className="connProfilePic2" />
                
                </div>
                <div className="flex">
                    <div className="accordion2" id="accordionExample">

                        <div className="card">
                            <div className="card-header" id="headingEleven">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                        Location
                                 </button>
                                </h5>
                            </div>
                            <div id="collapseEleven" class="collapse-open collapse show" aria-labelledby="headingEleven" data-parent="#accordionExample">
                                <div class="card-body-2">
                                    {this.state.user.location}
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingTwelve">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                        Styles
                                </button>
                                </h5>
                            </div>
                            <div id="collapseTwelve" class="collapse-open" aria-labelledby="headingTwelve" data-parent="#accordionExample">
                                <div class="card-body-2">
                                    {styles}
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header" id="headingThirteen">
                                <h5 class="mb-0">
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseThirteen" aria-expanded="true" aria-controls="collapseThirteen">
                                        Instruments
                                </button>
                                </h5>
                            </div>

                            <div id="collapseThirteen" class="collapse-open" aria-labelledby="headingThirteen" data-parent="#accordionExample">
                                <div class="card-body-2">
                                    {instruments}
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingFourteen">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                                        Seeking
                                 </button>
                                </h5>
                            </div>
                            <div id="collapseFourteen" class="collapse" aria-labelledby="headingFourteen" data-parent="#accordionExample">
                                <div class="card-body-2">
                                    {seeking}
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingFifteen">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseTwelve">
                                        Skill Level
                                </button>
                                </h5>
                            </div>
                            <div id="collapseFifteen" class="collapse" aria-labelledby="headingFifteen" data-parent="#accordionExample">
                                <div class="card-body-2">
                                    {skillLevel}
                                </div>
                            </div>
                        </div>
                    </div>
                   

                    {otherUsersConnect}
                    {otherUsersReview}

                    <div className="revTitle">Reviews | Rating: {this.state.user.userRating}⭐
                    <div className = "reviews">
                    {this.renderReviews()}
                    </div></div>
                    
                </div>


             
                <div className="connections">
                    <h1 className = "connetionHeader">Connections</h1>
                    <ConnectionCardSmallContainer which="connections" userId={this.state.user.userId} number="5" />
                </div>
                </div>
            </div>


        );
    }
}

let mapStateToProps = (state) => {
    return {
        popUp: state.popUp,
        currentUser: state.currentUser, currentUserConnections : state.currentUserConnections    }
}

let mapDispatchToProps = (dispatch) => {
    return {setCurrentUser: (user, connected) => dispatch({type: SETCURRENTUSER, user: user, connected: connected}),
        setCurrentConnections: (connections) => dispatch({type: SETCURRENTCONNECTIONS, connections: connections}),
        showPopUp: (value) => dispatch({type: POPUP, popUpType: value})

    }
  }

let ConnectedOtherUserProfile = connect(mapStateToProps, mapDispatchToProps)(OtherUserProfile)
export default ConnectedOtherUserProfile;













