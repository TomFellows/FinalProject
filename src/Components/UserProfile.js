import React, { Component } from 'react'
import '../CSS/UserProfile.css'
import Cities from '../CITIES.js'




class UserProfile extends Component {

    constructor () {
        super()

        this.autocomplete = '';

        this.citiesResults = []
        this.cities = new Cities

        this.state = {editing: false, inputValue: '', firstName: '', lastName: '', instruments: '',
        location: '', seeking: '', skillLevel: '', musicalStyles: ''}

        fetch('/getCurrentUser', {
            method: 'POST',
            credentials: 'same-origin'
        }).then(response => response.text())
        .then((response) => {

            let parsedResponse = JSON.parse(response).user

            this.setState({editing: false, inputValue: '', firstName: parsedResponse.firstName, 
            lastName: parsedResponse.lastName, instruments: parsedResponse.instruments.join(", "),
            location: parsedResponse.location, seeking: parsedResponse.seeking.join(", "), 
            skillLevel: parsedResponse.skillLevel, musicalStyles: parsedResponse.styles.join(", ")})

        }).catch((err) => {

            this.setState({editing: false, inputValue: '', firstName: 'Anton', lastName: 'Lelion', instruments: 'Guitar',
        location: 'Montreal, Canada', seeking: 'Session', skillLevel: 'Advanced', musicalStyles: 'Metal'})
        })
        
        
        
    }

    
   

    handleChange = (event) => {

        //Make a cities search if we're typing in the location field
        if (this.state.editing = 'location'){
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

            case 'instruments' :
            this.setState({instruments: this.state.inputValue, editing: false, inputValue: ''})
            break;

            case 'location' :

            let location = document.getElementById('autocomplete')

            this.setState({location: location.value, editing: false, inputValue: ''})
            break;

            case 'seeking' :
            this.setState({seeking: this.state.inputValue, editing: false, inputValue: ''})
            break;

            case 'musicalStyles' :
            this.setState({skillLevel: this.state.inputValue, editing: false, inputValue: ''})
            break;

            case 'skillLevel' :
            this.setState({skillLevel: this.state.inputValue, editing: false, inputValue: ''})
            break; 
        }

        fetch('/modifyProfile', {
            method: 'POST',
            body: JSON.stringify({firstName: this.state.firstName, lastName: this.state.lastName,
            instruments: this.state.instruments.split(', '), location: this.state.location,
            styles: this.state.musicalStyles.split(', '), seeking: this.state.seeking,
            skillLevel: this.state.skillLevel})
        }).then(response => response.text())
        .then(response => {

            let parsedResponse = JSON.parse(response)
            console.log('Success: ' + parsedResponse.success + ' Reason: ' + parsedResponse.reason)
        })

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

        let formEditing = {firstName: false, lastName: false, instruments: false, location: false,
        seeking: false, skillLevel: false, musicalStyles: false}
        
        //Checks the editing property of the state and sets the appropriate formEditing property to true
       
        formEditing[this.state.editing] = true
        
        //Define variables that will refer to react elements to be rendered
        let firstName, lastName, instruments, location, seeking, skillLevel, musicalStyles

       
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

        //Checks if the instruments is being edited, if yes, it displays and input field with save buttons.
        //If not being edited, it displays non editable text
        if (formEditing.instruments === true) {
            instruments = (<div>
                <input type="text" class="form-control" placeholder="instruments" 
                value={this.state.inputValue} onChange={this.handleChange}/>
        <button value='instruments' onClick={this.handleSubmit}>Save</button><button onClick={this.stopEdit}>Cancel edit</button> </div>)
        } else {
            let editButton = ''
            if (this.state.editing === false) {
                editButton = (<button value='instruments' onClick={this.handleEdit}>Edit</button>)
            }
            instruments = (<div><div className='profileLabel'>{this.state.instruments}</div>{editButton}</div>)
        }

        //Checks if the location is being edited, if yes, it displays and input field with save buttons.
        //If not being edited, it displays non editable text
        if (formEditing.location === true) {
            
            let list = this.citiesResults.map(item => (<option value={item}/>))

            list = (<datalist id='cities'>{list}</datalist>)

        
            location = (<div>

                {list}
                <input type="text" list='cities' class="form-control" id='autocomplete' placeholder="location" 
                value={this.state.inputValue} onChange={this.handleChange}/>
        <button value='location' onClick={this.handleSubmit}>Save</button><button onClick={this.stopEdit}>Cancel edit</button> </div>)
        } else {
            let editButton = ''
            if (this.state.editing === false) {
                editButton = (<button value='location' onClick={this.handleEdit}>Edit</button>)
            }
            location = (<div><div className='profileLabel'>{this.state.location}</div>{editButton}</div>)
        }

        //Checks if the Seeking... is being edited, if yes, it displays and input field with save buttons.
        //If not being edited, it displays non editable text
        if (formEditing.seeking === true) {
            seeking = (<div>
                <input type="text" class="form-control" placeholder="Seeking..." 
                value={this.state.inputValue} onChange={this.handleChange}/>
        <button value='seeking' onClick={this.handleSubmit}>Save</button><button onClick={this.stopEdit}>Cancel edit</button> </div>)
        } else {
            let editButton = ''
            if (this.state.editing === false) {
                editButton = (<button value='seeking' onClick={this.handleEdit}>Edit</button>)
            }
            seeking = (<div><div className='profileLabel'>{this.state.seeking}</div>{editButton}</div>)
        }

        //Checks if the musical styles is being edited, if yes, it displays and input field with save buttons.
        //If not being edited, it displays non editable text
        if (formEditing.musicalStyles === true) {
            musicalStyles = (<div>
                <input type="text" class="form-control" placeholder="Musical styles" 
                value={this.state.inputValue} onChange={this.handleChange}/>
        <button value='musicalStyles' onClick={this.handleSubmit}>Save</button><button onClick={this.stopEdit}>Cancel edit</button> </div>)
        } else {
            let editButton = ''
            if (this.state.editing === false) {
                editButton = (<button value='musicalStyles' onClick={this.handleEdit}>Edit</button>)
            }
            musicalStyles = (<div><div className='profileLabel'>{this.state.musicalStyles}</div>{editButton}</div>)
        }

        //Checks if the skill level is being edited, if yes, it displays and input field with save buttons.
        //If not being edited, it displays non editable text
        if (formEditing.skillLevel === true) {
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
                
                
                    <div className='fieldLabel'>Instruments:</div> {instruments}
                    <div className='fieldLabel'>Location :</div>{location}
              
                    <div className='fieldLabel'>Seeking :</div> {seeking}
                    <div className='fieldLabel'>Musical styles :</div> {musicalStyles}

                    <div className='fieldLabel'>Skill level:</div> {skillLevel}
               
                
                
            </form>
        
        </div>)
    }
}

export default UserProfile