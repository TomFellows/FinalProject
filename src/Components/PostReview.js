import React, { Component } from 'react'
import '../CSS/PopUpWindow.css'
import '../CSS/PostReview.css'

class PostReview extends Component {
    constructor() {
        super()
        this.state = {
            overallExperienceRating: "",
            skillLevelRating: "",
            reliabilityRating: "",
            comment: ""
        }
        this.handleRadio = this.handleRadio.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleComment = this.handleComment.bind(this)
    }

    handleRadio(evt) {
        if (evt.target.name === "overallExperience"){
            this.setState({overallExperienceRating: evt.target.value})
        }
        if (evt.target.name === "skillLevel"){
            this.setState({skillLevelRating: evt.target.value})
        }
        if (evt.target.name === "reliability"){
            this.setState({reliabilityRating: evt.target.value})
        }
    }
    handleComment(evt){
        this.setState({comment:evt.target.value})
    }
    handleSubmit(evt) {
        evt.preventDefault()
        let review= {}
        review.overall=this.state.overallExperienceRating
        review.skill=this.state.skillLevelRating
        review.reliability=this.state.reliabilityRating
        review.comment=this.state.comment
        let bod = JSON.stringify({userId:this.props.userId, revieweeId: this.props.revieweeId, review})
        console.log(bod)
        fetch('/reviewUser', {
            method: 'POST',
            credentials: 'same-origin',
            body: bod
        })
            .then(x => x.text())
            .then(responseBody =>{
                console.log(responseBody)
                let parsedBody=JSON.parse(responseBody)
                console.log(parsedBody)
                if (parsedBody.success === true){
                    console.log("review posted")
                }
                else {
                    console.log("something went wrong!!")
                }
            })

    }    

       

    render() {
        return (
            <div>
                <h2 class="reviewTitle">Please rate this user on:</h2>
                <form onSubmit= {this.handleSubmit}>
                <div className="reviewRow">
                    <p>Overall experience (5 = great!):</p>
                    <label class="radio">
                        <input id="Radio1" name="overallExperience" type="radio" value="1" onChange={this.handleRadio}/><span>1</span>
                    </label>
                    <label class="radio">
                        <input id="Radio2" name="overallExperience" type="radio" value="2" onChange={this.handleRadio}/><span>2</span>
                    </label>
                    <label class="radio">
                        <input id="Radio3" name="overallExperience" type="radio" value="3" onChange={this.handleRadio}/><span>3</span>
                    </label>
                    <label class="radio">
                        <input id="Radio4" name="overallExperience" type="radio" value="4" onChange={this.handleRadio}/><span>4</span>
                    </label>
                    <label class="radio">
                        <input id="Radio5" name="overallExperience" type="radio" value="5" onChange={this.handleRadio}/><span>5</span>
                    </label>
                </div>
                <div className="reviewRow">    
                    <p>Skill level:</p>
                    <label class="radio">
                        <input id="Radio1" name="skillLevel" type="radio" value="beginner" onChange={this.handleRadio}/><span>beginner</span>
                    </label>
                    <label class="radio">
                        <input id="Radio2" name="skillLevel" type="radio" value="intermediate"onChange={this.handleRadio}/><span>intermediate</span>
                    </label>
                    <label class="radio">
                        <input id="Radio3" name="skillLevel" type="radio" value="advanced" onChange={this.handleRadio}/><span>advanced</span>
                    </label>
                    <label class="radio">
                        <input id="Radio4" name="skillLevel" type="radio" value="professional" onChange={this.handleRadio}/><span>professional</span>
                    </label>
                    </div>

                    <p>Reliability (low to high):</p>
                    <label class="radio">
                        <input id="Radio1" name="reliability" type="radio" value="1" onChange={this.handleRadio}/><span>1</span>
                    </label>
                    <label class="radio">
                        <input id="Radio2" name="reliability" type="radio" value="2" onChange={this.handleRadio}/><span>2</span>
                    </label>
                    <label class="radio">
                        <input id="Radio3" name="reliability" type="radio" value="3" onChange={this.handleRadio}/><span>3</span>
                    </label>
                    <label class="radio">
                        <input id="Radio4" name="reliability" type="radio" value="4" onChange={this.handleRadio}/><span>4</span>
                    </label>
                    <label class="radio">
                        <input id="Radio5" name="reliability" type="radio" value="5" onChange={this.handleRadio}/><span>5</span>
                    </label>
                    <label>
                        Leave a comment
                    <input type ="text" name="comment" value={this.state.comment} onChange={this.handleComment}/>
                    </label>
                    
                    <input type = "submit" className = "loginBtn"/>
                {/* <button onSubmit={this.handleSubmit}>Submit Review</button> */}
                </form>
            </div>
        )
    }
}

export default PostReview;