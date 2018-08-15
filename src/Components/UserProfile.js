import React, { Component } from 'react'
import '../CSS/UserProfile.css'

class UserProfile extends Component {

    constructor () {
        super()

        this.state = {editing: false, inputValue: '', firstName: 'Anton', lastName: 'Lelion', instrument: 'Guitar',
        area: 'Montreal, Canada', lookingFor: 'Session', skillLevel: 'Advanced', musicalStyle: 'Metal'}
    }
    
    handleChange = (event) => {
        this.setState({inputValue: event.target.value})
    }

    
    handleSubmit = (event) => {
        event.preventDefault()
        switch (event.target.value) {
            case 'firstName' :
            this.setState({firstName: this.state.inputValue, editing: false, inputValue: ''})
            break;

            case 'lastName' :
            this.setState({lastName: this.state.inputValue, editing: false, inputValue: ''})
            break;

            case 'instrument' :
            this.setState({instrument: this.state.inputValue, editing: false, inputValue: ''})
            break;

            case 'area' :
            this.setState({area: this.state.inputValue, editing: false, inputValue: ''})
            break;

            case 'lookingFor' :
            this.setState({lookingFor: this.state.inputValue, editing: false, inputValue: ''})
            break;

            case 'musicalStyle' :
            this.setState({skillLevel: this.state.inputValue, editing: false, inputValue: ''})
            break;

            case 'skillLevel' :
            this.setState({skillLevel: this.state.inputValue, editing: false, inputValue: ''})
            break;
        }

    }

    handleEdit = (event) => {
        event.preventDefault()
        this.setState({editing: event.target.value, inputValue: this.state[event.target.value]})
    }

    stopEdit = () => {
        this.setState({editing: false})
    }


    render () {

        let formEditing = {firstName: false, lastName: false, instrument: false, area: false,
        lookingFor: false, skillLevel: false, musicalStyle: false}

        formEditing[this.state.editing] = true

        let firstName, lastName, instrument, area, lookingFor, skillLevel, musicalStyle

        if (formEditing.firstName === true) {
            firstName = (<div>
                <input type="text" class="form-control" placeholder="First name" 
                value={this.state.inputValue} onChange={this.handleChange}/>
        <button value='firstName' onClick={this.handleSubmit}>Save</button><button onClick={this.stopEdit}>Cancel edit</button> </div>)
        } else {
            let editButton = ''
            if (this.state.editing === false) {
                editButton = (<button value='firstName' onClick={this.handleEdit}>Edit</button>)
            }
            firstName = (<div><div className='profileLabel'>{this.state.firstName}</div>{editButton}</div>)
        }

        if (formEditing.lastName === true) {
            lastName = (<div>
                <input type="text" class="form-control" placeholder="Last name" 
                value={this.state.inputValue} onChange={this.handleChange}/>
        <button value='lastName' onClick={this.handleSubmit}>Save</button><button onClick={this.stopEdit}>Cancel edit</button> </div>)
        } else {
            let editButton = ''
            if (this.state.editing === false) {
                editButton = (<button value='lastName' onClick={this.handleEdit}>Edit</button>)
            }
            lastName = (<div><div className='profileLabel'>{this.state.lastName}</div>{editButton}</div>)
        }

        if (formEditing.instrument === true) {
            instrument = (<div>
                <input type="text" class="form-control" placeholder="Instrument" 
                value={this.state.inputValue} onChange={this.handleChange}/>
        <button value='instrument' onClick={this.handleSubmit}>Save</button><button onClick={this.stopEdit}>Cancel edit</button> </div>)
        } else {
            let editButton = ''
            if (this.state.editing === false) {
                editButton = (<button value='instrument' onClick={this.handleEdit}>Edit</button>)
            }
            instrument = (<div><div className='profileLabel'>{this.state.instrument}</div>{editButton}</div>)
        }

        if (formEditing.area === true) {
            area = (<div>
                <input type="text" class="form-control" placeholder="Area" 
                value={this.state.inputValue} onChange={this.handleChange}/>
        <button value='area' onClick={this.handleSubmit}>Save</button><button onClick={this.stopEdit}>Cancel edit</button> </div>)
        } else {
            let editButton = ''
            if (this.state.editing === false) {
                editButton = (<button value='area' onClick={this.handleEdit}>Edit</button>)
            }
            area = (<div><div className='profileLabel'>{this.state.area}</div>{editButton}</div>)
        }

        if (formEditing.lookingFor === true) {
            lookingFor = (<div>
                <input type="text" class="form-control" placeholder="Looking for..." 
                value={this.state.inputValue} onChange={this.handleChange}/>
        <button value='lookingFor' onClick={this.handleSubmit}>Save</button><button onClick={this.stopEdit}>Cancel edit</button> </div>)
        } else {
            let editButton = ''
            if (this.state.editing === false) {
                editButton = (<button value='lookingFor' onClick={this.handleEdit}>Edit</button>)
            }
            lookingFor = (<div><div className='profileLabel'>{this.state.lookingFor}</div>{editButton}</div>)
        }

        if (formEditing.musicalStyle === true) {
            musicalStyle = (<div>
                <input type="text" class="form-control" placeholder="Musical style" 
                value={this.state.inputValue} onChange={this.handleChange}/>
        <button value='musicalStyle' onClick={this.handleSubmit}>Save</button><button onClick={this.stopEdit}>Cancel edit</button> </div>)
        } else {
            let editButton = ''
            if (this.state.editing === false) {
                editButton = (<button value='musicalStyle' onClick={this.handleEdit}>Edit</button>)
            }
            musicalStyle = (<div><div className='profileLabel'>{this.state.musicalStyle}</div>{editButton}</div>)
        }

        if (formEditing.skilllevel === true) {
            skillLevel = (<div>
                <input type="text" class="form-control" placeholder="Skill level" 
                value={this.state.inputValue} onChange={this.handleChange}/>
        <button value='skillLevel' onClick={this.handleSubmit}>Save</button><button onClick={this.stopEdit}>Cancel edit</button> </div>)
        } else {
            let editButton = ''
            if (this.state.editing === false) {
                editButton = (<button value='skillLevel' onClick={this.handleEdit}>Edit</button>)
            }
            skillLevel = (<div><div className='profileLabel'>{this.state.skillLevel}</div>{editButton}</div>)
        }
        
        return (<div>
            <form>
                
                    <div className='fieldLabel'>First name:</div> {firstName}
                    <div className='fieldLabel'>Last name:</div> {lastName}
                
                
                    <div className='fieldLabel'>Instrument:</div> {instrument}
                    <div className='fieldLabel'>Area :</div>{area}
              
                    <div className='fieldLabel'>Looking for :</div> {lookingFor}
                    <div className='fieldLabel'>Musical style :</div> {musicalStyle}

                    <div className='fieldLabel'>Skill level:</div> {skillLevel}
               
                
                
            </form>
        
        </div>)
    }
}

export default UserProfile