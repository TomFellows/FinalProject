import React, { Component } from 'react'
import '../CSS/PopUpWindow.css'
import '../CSS/PostReview.css'

class PostReview extends Component {
    constructor() {
        super()
        this.state = {
            overallExperienceRating: "",
            skillLevelRating: "",
            reliabilityRating: ""
        }
        this.handleRadio = this.handleRadio.bind(this)
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

    render() {
        return (
            <div>
                <h2 class="reviewTitle">Please rate this user on:</h2>
                <form>
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
 
                </form>
            </div>
        )
    }
}

export default PostReview;