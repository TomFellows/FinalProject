import React, { Component } from 'react'
import '../CSS/PopUpWindow.css'
import '../CSS/PostReview.css'
import { connect } from 'react-redux';
import { POPUP } from '../ACTIONS';
import { withRouter } from 'react-router';


class PostReview extends Component {
    constructor() {
        super()
        this.state = {
            overallExperienceRating: "",
            skillLevelRating: "",
            reliabilityRating: "",
            comment: "",
            showSubmit: false
        }
        this.handleRadio = this.handleRadio.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleComment = this.handleComment.bind(this)
        this.reviewConfirmation = this.reviewConfirmation.bind(this)
        this.confirmation = this.confirmation.bind(this)

    }

    handleRadio(evt) {
        if (evt.target.name === "overallExperience") {
            this.setState({ overallExperienceRating: evt.target.value })
        }
        if (evt.target.name === "skillLevel") {
            this.setState({ skillLevelRating: evt.target.value })
        }
        if (evt.target.name === "reliability") {
            this.setState({ reliabilityRating: evt.target.value })
        }
    }
    handleComment(evt) {
        this.setState({ comment: evt.target.value })
    }
    handleSubmit(evt) {
        evt.preventDefault()
        let review = {}
        review.overall = this.state.overallExperienceRating
        review.skill = this.state.skillLevelRating
        review.reliability = this.state.reliabilityRating
        review.comment = this.state.comment
        let bod = JSON.stringify({ userId: this.props.userId, revieweeId: this.props.revieweeId, review })

        fetch('/reviewUser', {
            method: 'POST',
            credentials: 'same-origin',
            body: bod
        })
            .then(x => x.text())
            .then(responseBody => {
                
                let parsedBody = JSON.parse(responseBody)
                
                if (parsedBody.success === true) {
                    this.reviewConfirmation()
                    setTimeout(this.confirmation, 1000)
                    this.props.getUserProfile();
                    console.log("review posted")
                }
                else {
                    console.log("something went wrong!!")
                }
            })
   
        
    }

    confirmation() {
        this.props.dispatch({ type: "pop up", popUpType: false })
    }

    reviewConfirmation() {
        this.setState({ showSubmit: true })

    }


    render() {
        return (
            <div className="reviewForm">
                <div class="reviewTitle">Rate this user on:</div>
                <form clasName="form" onSubmit={this.handleSubmit}>
                    <div className="reviewRow">
                        <div className="reviewSubtitles">Overall experience:</div>
                        <label class="radio">
                            <input id="Radio1" name="overallExperience" type="radio" value="1" onChange={this.handleRadio} /><span className="reviewLabels">1</span>
                        </label>
                        <label class="radio">
                            <input id="Radio2" name="overallExperience" type="radio" value="2" onChange={this.handleRadio} /><span className="reviewLabels">2</span>
                        </label>
                        <label class="radio">
                            <input id="Radio3" name="overallExperience" type="radio" value="3" onChange={this.handleRadio} /><span className="reviewLabels">3</span>
                        </label>
                        <label class="radio">
                            <input id="Radio4" name="overallExperience" type="radio" value="4" onChange={this.handleRadio} /><span className="reviewLabels">4</span>
                        </label>
                        <label class="radio">
                            <input id="Radio5" name="overallExperience" type="radio" value="5" onChange={this.handleRadio} /><span className="reviewLabels">5</span>
                        </label>
                    </div>
                    <div className="reviewRow">
                        <div className="reviewSubtitles">Skill level:</div>
                        <label class="radio">
                            <input id="Radio1" name="skillLevel" type="radio" value="beginner" onChange={this.handleRadio} /><span className="reviewLabels">Beginner</span>
                        </label>
                        <label class="radio">
                            <input id="Radio2" name="skillLevel" type="radio" value="intermediate" onChange={this.handleRadio} /><span className="reviewLabels">Intermediate</span>
                        </label>
                        <label class="radio">
                            <input id="Radio3" name="skillLevel" type="radio" value="advanced" onChange={this.handleRadio} /><span className="reviewLabels">Advanced</span>
                        </label>
                        <label class="radio">
                            <input id="Radio4" name="skillLevel" type="radio" value="professional" onChange={this.handleRadio} /><span className="reviewLabels">Professional</span>
                        </label>
                    </div>

                    <div className="reviewRow">
                        <div className="reviewSubtitles">Reliability (low to high):</div>
                        <label class="radio">
                            <input id="Radio1" name="reliability" type="radio" value="1" onChange={this.handleRadio} /><span className="reviewLabels">1</span>
                        </label>
                        <label class="radio">
                            <input id="Radio2" name="reliability" type="radio" value="2" onChange={this.handleRadio} /><span className="reviewLabels">2</span>
                        </label>
                        <label class="radio">
                            <input id="Radio3" name="reliability" type="radio" value="3" onChange={this.handleRadio} /><span className="reviewLabels">3</span>
                        </label>
                        <label class="radio">
                            <input id="Radio4" name="reliability" type="radio" value="4" onChange={this.handleRadio} /><span className="reviewLabels">4</span>
                        </label>
                        <label class="radio">
                            <input id="Radio5" name="reliability" type="radio" value="5" onChange={this.handleRadio} /><span className="reviewLabels">5</span>
                        </label>
                    </div>
                    <div className="reviewRow">
                        <label>
                            <textarea type="text" className="inputBox" value={this.state.comment} placeHolder="Leave a comment..." onChange={this.handleComment}/>
                            {/* <AutosizeInput

                                name="comment"
                                value={this.state.comment}
                                style={{ fontSize: 20 }}
                                placeholder="Leave a comment...      "
                                onChange={this.handleComment}
                            /> */}

                        </label>
                    </div>
                    <div className="submission">
                        <input type="submit" className="submitBtn" />
                        {/* <button onSubmit={this.handleSubmit}>Submit Review</button> */}
                        <div className="reviewSubmission"> {this.state.showSubmit ? <div>Review Submitted!</div>: null }</div>
                    </div>
                </form>

            </div>
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        showPopUp: (value) => dispatch({ type: POPUP, popUpType: value })  //the data property is not used in the actual reducer
    }
}

let ConnectedPostReview = connect(mapDispatchToProps)(PostReview)

export default withRouter(ConnectedPostReview);