import React, { Component } from 'react';
import '../CSS/LandingPage.css'
import Login from './Login.js'
import {Cities, Instruments, Styles} from '../LISTS.js'



class LandingPage extends Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            location: "",
            instruments: "",
            styles: "",
            skillLevel: "",
            experience: "",
            seeking: ""
         
        }

        this.cities = new Cities;
        this.instruments = new Instruments;
        this.styles = new Styles;
        this.citiesResults = []
        this.instrumentsResults = []
        this.stylesResults = []

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.handleChange3 = this.handleChange3.bind(this)
        this.handleChange4 = this.handleChange4.bind(this)
        this.handleChange5 = this.handleChange5.bind(this)
        this.handleChange6 = this.handleChange6.bind(this)
        
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
        this.citiesResults = this.cities.search(evt.target.value, 6)
        this.setState({location: evt.target.value})
    }
    handleChange4(evt){
        this.instrumentsResults = this.instruments.search(evt.target.value, 6)
        this.setState({instruments: evt.target.value})
    }
    handleChange5(evt){
        this.stylesResults = this.styles.search(evt.target.value, 6)
        this.setState({styles: evt.target.value})
      }
    handleChange6(evt){
        this.setState({skillLevel: evt.target.value})
    }
   
    handleChange8(evt){
        this.setState({seeking: evt.target.value})
    }

    
   
    render() {


            let citiesList = this.citiesResults.map(item => (<option value={item}/>))

            citiesList = (<datalist id='citiesList'>{citiesList}</datalist>)

            let instrumentsList = this.instrumentsResults.map(item => (<option value={item}/>))

            instrumentsList = (<datalist id='instrumentsList'>{instrumentsList}</datalist>)

            let stylesList = this.stylesResults.map(item => (<option value={item}/>))

            stylesList = (<datalist id='stylesList'>{stylesList}</datalist>)



        

        return <div className = "contain">
        <div>
            <img className="pic2" src="Images/headphone.png"></img>
            <h1 className = "heading">GigHub</h1>
        </div>
            <img className="pic" src="Images/basscloseup.jpg"></img>
            
        <form className = "form" onSubmit= {this.handleSubmit}>
            <input className = "input" onChange = {this.handleChange} value = {this.state.firstName} placeholder = "First Name"/>
            <input className = "input" onChange = {this.handleChange2} value = {this.state.lastName} placeholder = "Last Name"/>
            <input className = "input" list='citiesList' onChange = {this.handleChange3} value = {this.state.location} placeholder = "Location"/>
            {citiesList}
            <input className = "input" list='instrumentsList' onChange = {this.handleChange4} value = {this.state.instruments} placeholder = "Main instrument"/>
            {instrumentsList}
            <input className = "input" list ='stylesList' onChange = {this.handleChange5} value = {this.state.styles} placeholder = "Style"/>
            {stylesList}

            <select className = "input" onChange = {this.handleChange6} inputStyle={{ textAlign: 'center' }} value = {this.state.skillLevel} placeholder = "Skill Level">
                <option style={{"display": "none"}} selected>&nbsp;Skill level</option>
                <option value="Beginner">&nbsp;Beginner</option>
                <option value="Intermediate">&nbsp;Intermediate</option>
                <option value="Advanced">&nbsp;Advanced</option>
                <option value="Professional">&nbsp;Professional</option>
            </select>
            <select className = "input" onChange = {this.handleChange8} value = {this.state.seeking} placeholder = "Seeking">
                <option style={{"display": "none"}} selected>&nbsp;Seeking ...</option>
                <option value="Jamming">&nbsp;Jamming</option>
                <option value="Gigs">&nbsp;Gigs</option>
                <option value="Session Work">&nbsp;Session Work</option>
                <option value="Starting a project">&nbsp;Starting a project</option>
                <option value="Other">&nbsp;Other</option>
            </select>
            <div className = "login">
            <Login createAccount={true} 
                    createdUser={{...this.state, 
                                instruments: this.state.instruments.split(', '),
                                styles: this.state.styles.split(', '),
                                seeking: this.state.seeking.split(', ')}}/>
            </div>
    
        </form>
            
        </div>

  }
  
}

export default LandingPage;

