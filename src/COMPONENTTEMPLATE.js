import React, { Component } from 'react';
import {POPUP} from './ACTIONS.js'
import {connect} from 'react-redux'
import PopUpWindow from './Components/PopUpWindow.js'

//Just a template to give an idea on how to map dispatches to props.
//The component need to be included in a Provider parent (that I added in App.js)

class ComponentTemplate extends Component {
    constructor() {
      super()
      
      this.displayPopUp = this.displayPopUp.bind(this)
  
    }

    displayPopUp(evt) {
        this.props.showPopUp(evt.target.value)

    }

    

    render() {

        let popUpWindow = ''

        if (this.props.popUp === 'popUp') {
            popUpWindow = (<PopUpWindow/>)
        }

      return (<div>
       
          <button onClick={this.displayPopUp} value='popUp'>Display PopUp</button>
          {popUpWindow}
          </div>)
    }
  }
  
  let mapStateToProps = (state) => {
    return {currentUser: state.currentUser, popUp: state.popUp}
  }
  
  let mapDispatchToProps = (dispatch) => {
    return {showPopUp: (value) => dispatch({type: POPUP, popUpType: value})  //the data property is not used in the actual reducer
    }
  }
  
  let ConnectedComponentTemplate = connect(mapStateToProps,mapDispatchToProps)(ComponentTemplate)
  
  export default ConnectedComponentTemplate;