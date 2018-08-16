import React, { Component } from 'react'
import '../CSS/UserProfile.css'
import Cities from '../CITIES.js'




class UserProfile extends Component {

    constructor () {
        super()

        this.autocomplete = '';

        this.citiesResults = []
        this.cities = new Cities
        

        this.state = {editing: false, inputValue: '', firstName: 'Anton', lastName: 'Lelion', instrument: 'Guitar',
        area: 'Montreal, Canada', lookingFor: 'Session', skillLevel: 'Advanced', musicalStyle: 'Metal'}
    }

    
   

    handleChange = (event) => {

        //Make a cities search if we're typing in the area field
        if (this.state.editing = 'area'){
            this.citiesResults = this.cities.search(event.target.value, 6)
        }

        this.setState({inputValue: event.target.value})
    }

    
    handleSubmit = (event) => {
        event.preventDefault()
        
        //Finds out which field is being submitted
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

            let area = document.getElementById('autocomplete')

            this.setState({area: area.value, editing: false, inputValue: ''})
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

        //This method is fired when an edit button is clicked, it catches which field is being edited
        //and puts it in the editing property of the state
        this.citiesResults = []

        this.setState({editing: event.target.value, inputValue: this.state[event.target.value]})
    }

    stopEdit = () => {
        this.setState({editing: false})
    }


    render () {

        let formEditing = {firstName: false, lastName: false, instrument: false, area: false,
        lookingFor: false, skillLevel: false, musicalStyle: false}
        
        //Checks the editing property of the state and sets the appropriate formEditing property to true
       
        formEditing[this.state.editing] = true
        
        //Define variables that will refer to react elements to be rendered
        let firstName, lastName, instrument, area, lookingFor, skillLevel, musicalStyle

       
         //Checks if the first name is being edited, if yes, it displays and input field with save buttons.
        //If not being edited, it displays non editable text
        if (formEditing.firstName === true) {
            firstName = (<div>
                <input type="text" class="form-control" placeholder="First name" 
                value={this.state.inputValue} onChange={this.handleChange}/>
        <button value='firstName' onClick={this.handleSubmit}>Save</button><button onClick={this.stopEdit}>Cancel edit</button> </div>)
        } else {  
            
            let editButton = ''
             //Only one field can be edited at a time. If another field is being edited, the Edit button will not show.
            if (this.state.editing === false) {
                editButton = (<button value='firstName' onClick={this.handleEdit}>Edit</button>)
            }
            firstName = (<div><div className='profileLabel'>{this.state.firstName}</div>{editButton}</div>)
        }

        //Checks if the last name is being edited, if yes, it displays and input field with save buttons.
        //If not being edited, it displays non editable text
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

        //Checks if the instrument is being edited, if yes, it displays and input field with save buttons.
        //If not being edited, it displays non editable text
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

        //Checks if the area is being edited, if yes, it displays and input field with save buttons.
        //If not being edited, it displays non editable text
        if (formEditing.area === true) {
            
            let list = this.citiesResults.map(item => (<option value={item}/>))

            list = (<datalist id='cities'>{list}</datalist>)

        
            area = (<div>

                {list}
                <input type="text" list='cities' class="form-control" id='autocomplete' placeholder="Area" 
                value={this.state.inputValue} onChange={this.handleChange}/>
        <button value='area' onClick={this.handleSubmit}>Save</button><button onClick={this.stopEdit}>Cancel edit</button> </div>)
        } else {
            let editButton = ''
            if (this.state.editing === false) {
                editButton = (<button value='area' onClick={this.handleEdit}>Edit</button>)
            }
            area = (<div><div className='profileLabel'>{this.state.area}</div>{editButton}</div>)
        }

        //Checks if the Looking for... is being edited, if yes, it displays and input field with save buttons.
        //If not being edited, it displays non editable text
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

        //Checks if the musical style is being edited, if yes, it displays and input field with save buttons.
        //If not being edited, it displays non editable text
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

        //Checks if the skill level is being edited, if yes, it displays and input field with save buttons.
        //If not being edited, it displays non editable text
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

            <div className='picBackground'><img src='/Images/Eminem.jpg' className='userProfilePic'/></div>
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