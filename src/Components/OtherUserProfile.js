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

class OtherUserProfile extends Component {
    constructor() {
        super()
        this.state = {
            user: {},
            text: "Connect",
            connect: false
        }
        this.renderList = this.renderList.bind(this)
        this.getUserProfile = this.getUserProfile.bind(this)
        this.addConnection = this.addConnection.bind(this)
        this.remConnection = this.remConnection.bind(this)
        this.renderReviews = this.renderReviews.bind(this)



    }

    componentDidMount() {
        this.getUserProfile();
    }

    getUserProfile() {

      let bod = JSON.stringify({ username: this.props.username })


        fetch('/getUserByUsername', {
            method: 'POST',
            credentials: 'same-origin',
            body: bod
        })
            .then(x => x.text())
            .then(responseBody => {
                let parsedBody = JSON.parse(responseBody);

                if (parsedBody.success === true) {
                    this.setState({ user: parsedBody.user })



                } else {
                    console.log("invalid userId")
                }
            })
    }

    popUp = (event) => {
        this.props.dispatch({ type: "pop up", popUpType: true })
    }

    renderList(x) {
        return <div>{x}</div>
    }

    renderReviews() {
        let reviews;
        let reviewObj;
        let presentedObj;

        if (this.state.user.reviews !== undefined) {
            reviews = this.state.user.reviews.map(rev => {
                return [rev.reviewerId, rev.review]
                //add reviewerName
        
            })
            console.log(reviews)
            if (reviews !== undefined) {
                reviewObj = reviews.map(rev => {
                    return [rev[1].overall, rev[1].skill, rev[1].reliability, rev[1].comment]
                })
            
            if(reviewObj !== undefined){
                console.log(reviewObj)
                presentedObj=reviewObj.map(arr => {
                    return (
                    <div>
                        {/* <div>Name: </div> */}
                        <div>Overall Experience: {arr[0]}</div>
                        <div>Skill Level: {arr[1]}</div>
                        <div>Reliability: {arr[2]}</div>
                        <div>Comment: {arr[3]}</div>
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
        
        



        return (<div>
            {this.props.popUp ? <PopUpWindow><PostReview renderUser= {this.getUserProfile} username={this.state.user.username} userId={this.props.currentUser.userId} revieweeId={this.state.user.userId} popUp={this.props.popUp}/></PopUpWindow> : null}
            <div className="area">
                <div className = "flex2">
                <h1 className="name">
                    {`${this.state.user.firstName} ${this.state.user.lastName}`}
                </h1>
                <h10 className = "name2">
                    {this.state.user.experience}
                </h10>
                <img src="/Images/shaun.jpg" className="connProfilePic2" />
                
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
                            <div id="collapseEleven" class="collapse" aria-labelledby="headingEleven" data-parent="#accordionExample">
                                <div class="card-body">
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
                            <div id="collapseTwelve" class="collapse" aria-labelledby="headingTwelve" data-parent="#accordionExample">
                                <div class="card-body">
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

                            <div id="collapseThirteen" class="collapse" aria-labelledby="headingThirteen" data-parent="#accordionExample">
                                <div class="card-body">
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
                                <div class="card-body">
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
                                <div class="card-body">
                                    {skillLevel}
                                </div>
                            </div>
                        </div>
                    </div>
                   
               



                    <div className="twoButtons">
                       {connect ? <button className="connect" onClick={this.remConnection}>Disconnect</button>: <button className="connect" onClick={this.addConnection}>Connect</button>}
                        {/* {connect ? <button className="connect" onClick={this.remConnection}>Disconnect</button> : null}     */}
                    </div>
                    <div className = "oneButton">
                         <button className="connect2" onClick={this.popUp} value='PostReview'> Review </button>
                    </div>
                    <div className="revTitle">Reviews</div>
                </div>

                <div>{this.renderReviews()}</div>
                



             
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
        currentUser: state.currentUser
    }
}
let ConnectedOtherUserProfile = connect(mapStateToProps)(OtherUserProfile)
export default ConnectedOtherUserProfile;







{/* <div className="individualMiniProfile2">
                    
                    <img src="/Images/shaun.jpg" className="connProfilePic2" />
                    <div className="infoCont2">
                        <div className="info2">{this.state.user.firstName} {this.state.user.lastName}</div>
                        <div className="info3">Location: {this.state.user.location}</div>
                        <div className="info3">Styles: {styles}</div>
                        <div className="info3">Instruments: {instruments}</div>
                        <div className="info3">Seeking: {seeking}</div>
                        <div className="info3">Skill Level: {this.state.user.skillLevel}</div>
                        <div className="info3">Experience: {this.state.user.experience}</div>
                        <button className="connectButton" onClick={this.addConnection}>Connect</button>
                    </div>
        </div> */}








