import React, { Component } from 'react';
import '../CSS/LandingPage.css'
import Login from './Login.js'



class LandingPage extends Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            location: "",
            instruments: [],
            styles: [],
            skillLevel: "",
            experience: "",
            seeking: []
         
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.handleChange3 = this.handleChange3.bind(this)
        this.handleChange4 = this.handleChange4.bind(this)
        this.handleChange5 = this.handleChange5.bind(this)
        this.handleChange6 = this.handleChange6.bind(this)
        this.handleChange7 = this.handleChange7.bind(this)
        this.handleChange8 = this.handleChange8.bind(this)
    }

    handleSubmit (evt) {
        evt.preventDefault(0)
    }
    
    handleChange(evt){
     this.setState({firstName: evt.target.value})
    }
    handleChange2(evt){
        this.setState({lastName: evt.target.value})
    }
    handleChange3(evt){
        this.setState({location: evt.target.value})
    }
    handleChange4(evt){
      this.setState({instruments: evt.target.value.split(", ")})
    }
    handleChange5(evt){
        this.setState({styles: evt.target.value.split(", ")})
      }
    handleChange6(evt){
        this.setState({skillLevel: evt.target.value})
    }
    handleChange7(evt){
        this.setState({experience: evt.target.value})
    }
    handleChange8(evt){
        this.setState({seeking: evt.target.value.split(", ")})
    }

    
   
    render() {
        return <div className = "contain">
        <div>
            <img className="pic2" src="Images/headphones.png"></img>
            <h1 className = "heading">GigHub</h1>
        </div>
            <img className="pic" src="Images/bg3.jpg"></img>
            
        <form className = "form" onSubmit= {this.handleSubmit}>
            <input className = "input" onChange = {this.handleChange} value = {this.state.firstName} placeholder = "First Name"/>
            <input className = "input" onChange = {this.handleChange2} value = {this.state.lastName} placeholder = "Last Name"/>
            <input className = "input" onChange = {this.handleChange3} value = {this.state.location} placeholder = "Location"/>
            <input className = "input" onChange = {this.handleChange4} value = {this.state.instruments} placeholder = "Instruments"/>
            <input className = "input" onChange = {this.handleChange5} value = {this.state.styles} placeholder = "Styles"/>
            <input className = "input" onChange = {this.handleChange6} value = {this.state.skillLevel} placeholder = "Skill Level"/>
            <input className = "input" onChange = {this.handleChange7} value = {this.state.experience} placeholder = "Experience"/>
            <input className = "input" onChange = {this.handleChange8} value = {this.state.seeking} placeholder = "Seeking"/>
            {/* <input className = "input2" placeholder = "Instruments"/> */}
            <div className = "login">
            <Login createAccount={true} createdUser={this.state}/>
            </div>
    
        </form>
            
        </div>

  }
  
}

export default LandingPage;

