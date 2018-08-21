import React, { Component } from 'react'
import '../CSS/UserProfile.css'
import {connect} from 'react-redux'
import {Cities, Instruments, Styles} from '../LISTS.js'
import { SETCURRENTUSER } from '../ACTIONS';




class UserProfile extends Component {

    constructor (props) {
        super(props)

        this.autocomplete = '';

        this.citiesResults = []
        this.cities = new Cities
        this.instrumentsResults = []
        this.instruments = new Instruments
        this.stylesResults = []
        this.styles = new Styles

        this.setUserAfterEdit = this.setUserAfterEdit.bind(this)
        this.modifyProfile = this.modifyProfile.bind(this)
        
        this.state = {editing: false, inputValue: ''}


    }



    
   

    handleChange = (event) => {
        event.preventDefault()

        //Make a cities search if we're typing in the location field
        if (this.state.editing === 'location'){
            this.citiesResults = this.cities.search(event.target.value, 6)
        }

        if (this.state.editing === 'instruments'){
            this.instrumentsResults = this.instruments.search(event.target.value, 6)
        }

        if (this.state.editing === 'styles'){
            this.stylesResults = this.styles.search(event.target.value, 6)
        }

        this.setState({inputValue: event.target.value})
    }

    
    handleSubmit = (event) => {
        event.preventDefault()
        let modifiedUser = {...this.props.currentUser}

        //Finds out which field is being submitted
        switch (event.target.value) {


            case 'firstName' :
            modifiedUser = {...this.props.currentUser, firstName: this.state.inputValue}
            break;

            case 'lastName' :
            modifiedUser = ({...this.props.currentUser, lastName: this.state.inputValue})
            break;

            case 'instruments' :
            modifiedUser = ({...this.props.currentUser, instruments: this.props.currentUser.instruments.concat(this.state.inputValue)})
            break;

            case 'location' :

            modifiedUser = ({...this.props.currentUser, location: this.state.inputValue})
            break;

            case 'seeking' :
            modifiedUser = ({...this.props.currentUser, seeking: this.props.currentUser.seeking.concat(this.state.inputValue)})
            break;

            case 'styles' :
            modifiedUser = ({...this.props.currentUser, styles: this.props.currentUser.styles.concat(this.state.inputValue)})
            break;

            case 'skillLevel' :
            modifiedUser = ({...this.props.currentUser, skillLevel: this.state.inputValue})
            break; 

            case 'experience' :
            modifiedUser = ({...this.props.currentUser, experience: this.state.inputValue})
            break; 
        }

        this.setState({editing: false, inputValue:''})

       this.modifyProfile(modifiedUser)

    }

    modifyProfile (user) {

        let setUser = this.setUserAfterEdit
        
        fetch('/modifyProfile', {
            method: 'POST',
            body: JSON.stringify(user)
        }).then(response => response.text())
        .then(response => {

            let parsedResponse = JSON.parse(response)
            console.log('Success: ' + parsedResponse.success + ' Reason: ' + parsedResponse.reason)
        }).then(setUser)
    }

    setUserAfterEdit () {
        fetch('/getCurrentUser', {
            credentials: 'same-origin'
        }).then(response => response.text())
            .then((response) => {

                let parsedResponse = JSON.parse(response)

                if (parsedResponse.user) {
                    let currentUser = parsedResponse.user

                    this.props.setCurrentUser(JSON.parse(JSON.stringify(currentUser)), 'connected')
                } 
            })
    }
    

    handleEdit = (event) => {
        event.preventDefault()

        //This method is fired when an edit button is clicked, it catches which field is being edited
        //and puts it in the editing property of the state
        this.citiesResults = []
        this.instrumentsResults = []
        this.stylesResults = []

        let initialInput

        

        if (event.target.value === 'styles' || event.target.value === 'instruments' || event.target.value === 'seeking' ) {

            initialInput = ''
        } else {
            initialInput = this.props.currentUser[event.target.value]
        }

        this.setState({editing: event.target.value, inputValue: initialInput})

        if (event.target.value === 'experience') {
            let form = document.getElementsByTagName('body')

            form.scrollTop = form.scrollHeight
        }
    }

    stopEdit = (event) => {
        event.preventDefault()
        this.setState({editing: false})
    }

    removeInstrument = (event) => {
        event.preventDefault()

        let list = this.props.currentUser.instruments.filter((item, index)=> {
            return index !== parseInt(event.target.value)
        })

        let modifiedUser = {...this.props.currentUser, instruments: list}
        
       this.modifyProfile(modifiedUser)


    }

    removeSeeking = (event) => {
        event.preventDefault()
        

        let list = this.props.currentUser.seeking.filter((item, index)=> {
            return index !== parseInt(event.target.value)
        })

        let modifiedUser = {...this.props.currentUser, seeking: list}
        
       this.modifyProfile(modifiedUser)

    }

    removeStyle = (event) => {
        event.preventDefault()
       
        let list = this.props.currentUser.styles.filter((item, index)=> {
            return index !== parseInt(event.target.value)
        })

        let modifiedUser = {...this.props.currentUser, styles: list}
        
       this.modifyProfile(modifiedUser)


    }


    render () {

        let formEditing = {firstName: false, lastName: false, instruments: false, location: false,
        seeking: false, skillLevel: false, styles: false, experience: false}
        
        //Checks the editing property of the state and sets the appropriate formEditing property to true
       
        formEditing[this.state.editing] = true
        
        //Define variables that will refer to react elements to be rendered
        let firstName, lastName, instruments, location, seeking, skillLevel, styles, experience

       
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
            firstName = (<div><div className='profileLabel'>{this.props.currentUser.firstName}</div>{editButton}</div>)
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
            lastName = (<div><div className='profileLabel'>{this.props.currentUser.lastName}</div>{editButton}</div>)
        }

        //Checks if the instruments is being edited, if yes, it displays and input field with save buttons.
        //If not being edited, it displays non editable text
        let instrumentsEdit = ''
        if (formEditing.instruments === true) {

            let list = this.instrumentsResults.map(item => (<option value={item}/>))

            list = (<datalist id='instruments'>{list}</datalist>)

            
            instrumentsEdit = (<div>
                {list}
                <input type="text" list='instruments'class="form-control" placeholder="Instruments" 
                value={this.state.inputValue} onChange={this.handleChange}/>
            <button value='instruments' onClick={this.handleSubmit}>Save</button><button onClick={this.stopEdit}>Cancel edit</button> </div>)
        } 

            let editInstrumentsButton = ''
            if (this.state.editing === false) {
                editInstrumentsButton = (<button value='instruments' className='addButton' onClick={this.handleEdit}>Add</button>)
            }

            let mappedInstruments = this.props.currentUser.instruments.map((item, index) => (<div className='listItem'>
            {item}&nbsp;<button type='button' onClick={this.removeInstrument} value={index}>X</button></div>))
          

            instruments = (<div><div className='profileLabel'>{mappedInstruments}</div>{editInstrumentsButton}{instrumentsEdit}</div>)

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
            location = (<div><div className='profileLabel'>{this.props.currentUser.location}</div>{editButton}</div>)
        }

        //Checks if the Seeking... is being edited, if yes, it displays and input field with save buttons.
        //If not being edited, it displays non editable text
        let seekingEdit;
        if (formEditing.seeking === true) {

            seekingEdit = (<div>
                <select class="form-control" placeholder="Seeking..." 
                value={this.state.inputValue} onChange={this.handleChange}>
                <option style={{"display": "none"}} selected>Seeking ...</option>
                <option value="Jamming">Jamming</option>
                <option value="Gigs">Gigs</option>
                <option value="Session Work">Session Work</option>
                <option value="Starting a project">Starting a project</option>
                <option value="Other">Othert</option>
                </select>
            <button value='seeking' onClick={this.handleSubmit}>Save</button><button onClick={this.stopEdit}>Cancel edit</button> </div>)
        } 

            let editSeekingButton = ''
            if (this.state.editing === false) {
                editSeekingButton = (<button value='seeking' className='addButton' onClick={this.handleEdit}>Add</button>)
            }

            let mappedSeeking = this.props.currentUser.seeking.map((item, index) => (<div className='listItem'>
            {item}&nbsp;<button type='button' onClick={this.removeSeeking} value={index}>X</button></div>))
          

            seeking = (<div><div className='profileLabel'>{mappedSeeking}</div>{editSeekingButton}{seekingEdit}</div>)
        

        //Checks if the musical styles is being edited, if yes, it displays and input field with save buttons.
        //If not being edited, it displays non editable text
        let stylesEdit = ''
        if (formEditing.styles === true) {

            let list = this.stylesResults.map(item => (<option value={item}/>))

            list = (<datalist id='styles'>{list}</datalist>)

            stylesEdit = (<div>
                {list}
                <input type="text" list='styles' class="form-control" placeholder="Musical styles" 
                value={this.state.inputValue} onChange={this.handleChange}/>
            <button value='styles' onClick={this.handleSubmit}>Save</button><button onClick={this.stopEdit}>Cancel edit</button> </div>)
        } 

            let editStylesButton = ''
            if (this.state.editing === false) {
                editStylesButton = (<button value='styles' className='addButton' onClick={this.handleEdit}>Add</button>)
            }

            let mappedStyles = this.props.currentUser.styles.map((item, index) => (<div className='listItem'>
            {item}&nbsp;<button type='button' onClick={this.removeStyle} value={index}>X</button></div>))
          

            styles = (<div><div className='profileLabel'>{mappedStyles}</div>{editStylesButton}{stylesEdit}</div>)

        //Checks if the skill level is being edited, if yes, it displays and input field with save buttons.
        //If not being edited, it displays non editable text
        if (formEditing.skillLevel === true) {
            skillLevel = (<div>
                <select class="form-control" placeholder="Skill level" 
                value={this.state.inputValue} onChange={this.handleChange}>
                <option style={{"display": "none"}} selected>Skill level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Professional">Professional</option>
                </select>
        <button value='skillLevel' onClick={this.handleSubmit}>Save</button><button onClick={this.stopEdit}>Cancel edit</button> </div>)
        } else {
            let editButton = ''
            if (this.state.editing === false) {
                editButton = (<button value='skillLevel' onClick={this.handleEdit}>Edit</button>)
            }
            skillLevel = (<div><div className='profileLabel'>{this.props.currentUser.skillLevel}</div>{editButton}</div>)
        }

        //Checks if the about me is being edited, if yes, it displays and input field with save buttons.
        //If not being edited, it displays non editable text
        if (formEditing.experience === true) {
            experience = (<div>
                <textarea class="form-control" placeholder="About me..." rows='5'
                value={this.state.inputValue} onChange={this.handleChange}/>
        <button value='experience' onClick={this.handleSubmit}>Save</button><button onClick={this.stopEdit}>Cancel edit</button> </div>)
        } else {
            let editButton = ''
            if (this.state.editing === false) {
                editButton = (<button value='experience' onClick={this.handleEdit}>Edit</button>)
            }
            experience = (<div><div className='profileLabel'>{this.props.currentUser.experience}</div>{editButton}</div>)
        }
        
        return (<div className='userProfile'>

            <div className='picBackground'><img src='/Images/Eminem.jpg' className='userProfilePic'/></div>
            <form>
                
                    <div className='fieldLabel'>First name:</div> {firstName}
                    <div className='fieldLabel'>Last name:</div> {lastName}
                
                
                    <div className='fieldLabel'>Instruments:</div> {instruments}
                    <div className='fieldLabel'>Location :</div>{location}
              
                    <div className='fieldLabel'>Seeking :</div> {seeking}
                    <div className='fieldLabel'>Musical styles :</div> {styles}

                    <div className='fieldLabel'>Skill level:</div> {skillLevel}

                    <div className='fieldLabel'>About me:</div> {experience}
               
                
                
            </form>
        
        </div>)
    }
}

let mapStateToProps = (state) => {
    return {currentUser: state.currentUser, popUp: state.popUp}
  }

  let mapDispatchToProps = (dispatch) => {
    return {setCurrentUser: (user, connected) => dispatch({type: SETCURRENTUSER, user: user, connected: connected})
    }
  }
  
  let ConnectedUserProfile = connect(mapStateToProps,mapDispatchToProps)(UserProfile)
  
  export default ConnectedUserProfile;