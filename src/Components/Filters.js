import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import '../CSS/Filters.css'
import {Cities, Instruments, Styles} from '../LISTS.js'

class Filters extends Component{

    constructor () {
        super ()

        this.citiesResults = []
        this.cities = new Cities
        this.instrumentsResults = []
        this.instruments = new Instruments
        this.stylesResults = []
        this.styles = new Styles

        this.state = {instruments: '', location: '',
                    seeking: '', skillLevel: '', styles: ''}
    }

    handleInstrumentChange = (event) => {
        this.setState({instruments: event.target.value})
    }

    handleAreaChange = (event) => {
        this.setState({location: event.target.value})
    }

    handleSeekingChange = (event) => {
        this.setState({seeking: event.target.value})
    }

    handleMusicalStyleChange = (event) => {
        this.setState({styles: event.target.value})
    }

    handleSkillLevelChange = (event) => {
        this.setState({skillLevel: event.target.value})
    }

    handleSubmit = (event) => {
       
        
        fetch('/getUsersByCriteria', {
            method: 'POST',
            credentials: 'same-origin',
            body: JSON.stringify(this.state)
        }).then(response => response.text())
        .then(response => {
            
            let parsedResponse = JSON.parse(response)

            let results = parsedResponse.result

            this.props.history.push({
                pathname: '/FindConnections',
                users: results})
            
        })

    }

    render () {


            let citiesList = this.citiesResults.map(item => (<option value={item}/>))

            citiesList = (<datalist id='citiesList'>{citiesList}</datalist>)

            let instrumentsList = this.instrumentsResults.map(item => (<option value={item}/>))

            instrumentsList = (<datalist id='instrumentsList'>{instrumentsList}</datalist>)

            let stylesList = this.stylesResults.map(item => (<option value={item}/>))

            stylesList = (<datalist id='stylesList'>{stylesList}</datalist>)



        return (<div class='filters'>
            <form>
                <div class="row">
                    <div class="col-md-4">
                        <input type="text" class="form-control" list='instrumentsList' placeholder="Instrument played" 
                        value={this.state.instrument} onChange={this.handleInstrumentChange}/>
                        {instrumentsList}
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control" list='citiesList' placeholder="Location" 
                        value={this.state.area} onChange={this.handleAreaChange}/>
                        {citiesList}
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-md-4">
                        <select className="form-control" onChange={this.handleSeekingChange} value={this.state.seeking} placeholder="Seeking">
                            <option style={{ "display": "none" }} selected>Seeking ...</option>
                            <option value="Jamming">Jamming</option>
                            <option value="Gigs">Gigs</option>
                            <option value="Session Work">Session Work</option>
                            <option value="Starting a project">Starting a project</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control" list='stylesList' placeholder="Musical style" 
                        value={this.state.musicalStyle} onChange={this.handleMusicalStyleChange}/>
                        {stylesList}
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-md-4">
                        <select className="form-control" onChange={this.handleSkillLevelChange} value={this.state.skillLevel} placeholder="Skill Level">
                            <option style={{ "display": "none" }} selected>Skill level</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                            <option value="Professional">Professional</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control" placeholder="Other ..." />
                    </div>
                    </div>
                    <br/>
                <div class="row">
                    <div class="col-md-4">
                    <button onClick={this.handleSubmit} class="navbar-toggler submitFilters" type="button" data-toggle="collapse" data-target="#Filters" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    Submit
                    </button>
                    </div>
                </div>
                
               
            </form>
        
        </div>)
    }


}

export default withRouter(Filters)