import React, { Component } from 'react';
import {ACTION1, ACTION2, POPUP} from './ACTIONS.js'
import {connect} from 'react-redux'
import PopUpWindow from './Components/PopUpWindow.js'

//Just a template to give an idea on how to map dispatches to props.
//The component need to be included in a Provider parent (that I added in App.js)

class ComponentTemplate extends Component {
    constructor() {
      super()
      this.function1 = this.function1.bind(this)
      this.function2 = this.function2.bind(this)
      this.displayPopUp = this.displayPopUp.bind(this)
  
    }
    function1(evt) {
      evt.preventDefault()
      this.props.doSomething('some Value') //Get the mapped dispatch function in the props at the bottom
  
      
    }
    function2(evt) {
        this.props.doSomethingElse('some Value') //Get the mapped dispatch function in the props at the bottom
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
          <button onClick={this.function1}>Function 1</button>
          <button onClick={this.function2}>Function 2</button>
          <button onClick={this.displayPopUp} value='popUp'>Display PopUp</button>
          {popUpWindow}
          </div>)
    }
  }
  
  let mapStateToProps = (state) => {
    return {currentUser: state.currentUser, popUp: state.popUp}
  }
  
  let mapDispatchToProps = (dispatch) => {
    return {doSomething: (value) => dispatch({type: ACTION1, data: value}), //the data property is not used in the actual reducer
            doSomethingElse: (value) => dispatch({type: ACTION2, data: value}),
            showPopUp: (value) => dispatch({type: POPUP, popUpType: value})  //the data property is not used in the actual reducer
    }
  }
  
  let ConnectedComponentTemplate = connect(mapStateToProps,mapDispatchToProps)(ComponentTemplate)
  
  export default ConnectedComponentTemplate;