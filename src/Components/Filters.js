import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import '../CSS/Filters.css'

class Filters extends Component{

    constructor () {
        super ()


        this.state = {instruments: '', location: '',
                    lookingFor: '', skillLevel: '', styles: ''}
    }

    handleInstrumentChange = (event) => {
        this.setState({instruments: event.target.value})
    }

    handleAreaChange = (event) => {
        this.setState({location: event.target.value})
    }

    handleLookingForChange = (event) => {
        this.setState({lookingFor: event.target.value})
    }

    handleMusicalStyleChange = (event) => {
        this.setState({styles: event.target.value})
    }

    handleSkillLevelChange = (event) => {
        this.setState({skillLevel: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
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

        return (<div class='filters'>
            <form onSubmit={this.handleSubmit}>
                <div class="row">
                    <div class="col-md-4">
                        <input type="text" class="form-control" placeholder="Instrument played" 
                        value={this.state.instrument} onChange={this.handleInstrumentChange}/>
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control" placeholder="Location" 
                        value={this.state.area} onChange={this.handleAreaChange}/>
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-md-4">
                        <input type="text" class="form-control" placeholder="Looking for ..." 
                        value={this.state.lookingFor} onChange={this.handleLookingForChange}/>
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control" placeholder="Musical style" 
                        value={this.state.musicalStyle} onChange={this.handleMusicalStyleChange}/>
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-md-4">
                        <input type="text" class="form-control" placeholder="Skill level" 
                        value={this.state.skillLevel} onChange={this.handleSkillLevelChange}/>
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control" placeholder="Other ..." />
                    </div>
                    </div>
                    <br/>
                <div class="row">
                    <div class="col-md-4">
                        <input type='submit' value='Submit' class='btn-primary'/>
                    </div>
                </div>
                
               
            </form>
        
        </div>)
    }


}

export default withRouter(Filters)