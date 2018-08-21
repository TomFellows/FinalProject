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
        console.log(bod)
        fetch('/reviewUser', {
            method: 'POST',
            credentials: 'same-origin',
            body: bod
        })
            .then(x => x.text())
            .then(responseBody => {
                console.log(responseBody)
                let parsedBody = JSON.parse(responseBody)
                console.log(parsedBody)
                if (parsedBody.success === true) {
                    console.log("review posted")
                }
                else {
                    console.log("something went wrong!!")
                }
            })
        this.reviewConfirmation()
        setTimeout(this.confirmation, 1000)
        // this.props.history.push('/OtherUserProfile/' + this.props.username)
        this.props.renderUser();
    }

    confirmation() {
        this.props.dispatch({ type: "pop up", popUpType: false })
    }

    reviewConfirmation() {
        this.setState({ showSubmit: true })

    }


    render() {
        return (
            <div>
                <h2 class="reviewTitle">Rate this user on:</h2>
                <form clasName="form" onSubmit={this.handleSubmit}>
                    <div className="reviewRow">
                        <p>Overall experience (5 = great!):</p>
                        <label class="radio">
                            <input id="Radio1" name="overallExperience" type="radio" value="1" onChange={this.handleRadio} /><span>1</span>
                        </label>
                        <label class="radio">
                            <input id="Radio2" name="overallExperience" type="radio" value="2" onChange={this.handleRadio} /><span>2</span>
                        </label>
                        <label class="radio">
                            <input id="Radio3" name="overallExperience" type="radio" value="3" onChange={this.handleRadio} /><span>3</span>
                        </label>
                        <label class="radio">
                            <input id="Radio4" name="overallExperience" type="radio" value="4" onChange={this.handleRadio} /><span>4</span>
                        </label>
                        <label class="radio">
                            <input id="Radio5" name="overallExperience" type="radio" value="5" onChange={this.handleRadio} /><span>5</span>
                        </label>
                    </div>
                    <div className="reviewRow">
                        <p>Skill level:</p>
                        <label class="radio">
                            <input id="Radio1" name="skillLevel" type="radio" value="beginner" onChange={this.handleRadio} /><span>beginner</span>
                        </label>
                        <label class="radio">
                            <input id="Radio2" name="skillLevel" type="radio" value="intermediate" onChange={this.handleRadio} /><span>intermediate</span>
                        </label>
                        <label class="radio">
                            <input id="Radio3" name="skillLevel" type="radio" value="advanced" onChange={this.handleRadio} /><span>advanced</span>
                        </label>
                        <label class="radio">
                            <input id="Radio4" name="skillLevel" type="radio" value="professional" onChange={this.handleRadio} /><span>professional</span>
                        </label>
                    </div>

                    <div className="reviewRow">
                        <p>Reliability (low to high):</p>
                        <label class="radio">
                            <input id="Radio1" name="reliability" type="radio" value="1" onChange={this.handleRadio} /><span>1</span>
                        </label>
                        <label class="radio">
                            <input id="Radio2" name="reliability" type="radio" value="2" onChange={this.handleRadio} /><span>2</span>
                        </label>
                        <label class="radio">
                            <input id="Radio3" name="reliability" type="radio" value="3" onChange={this.handleRadio} /><span>3</span>
                        </label>
                        <label class="radio">
                            <input id="Radio4" name="reliability" type="radio" value="4" onChange={this.handleRadio} /><span>4</span>
                        </label>
                        <label class="radio">
                            <input id="Radio5" name="reliability" type="radio" value="5" onChange={this.handleRadio} /><span>5</span>
                        </label>
                    </div>
                    <div className="reviewRow">
                        <label>
                            Leave a comment
                    <input type="text" name="comment" value={this.state.comment} onChange={this.handleComment} />
                        </label>
                    </div>
                    <input type="submit" className="loginBtn" />
                    {/* <button onSubmit={this.handleSubmit}>Submit Review</button> */}
                </form>
                <div> {this.state.showSubmit ? <h2>Review Submitted!</h2> : null}</div>
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