import React, { Component } from 'react';
import {POPUP} from '../ACTIONS.js'
import {connect} from 'react-redux'
import '../CSS/PopUpWindow.css'

class PopUpWindow extends Component {

    constructor() {

        super()

        this.closeWindow = this.closeWindow.bind(this)
    }


    closeWindow() {
        this.props.removeSelf(false)

    }

    render() {

        return (<div className='popUpwindow'>
        <div className='innerPopupWindow'>
        <button onClick={this.closeWindow} className='closeButton'>X</button>
        {this.props.children}
        </div>

        </div>)

    }
}

let mapStateToProps = (state) => {
    return {currentUser: state.currentUser, popUp: state.popUp}
  }
  
  let mapDispatchToProps = (dispatch) => {
    return {removeSelf: (value) => dispatch({type: POPUP, popUpType: value}) 
    }
  }
  
  let ConnectedPopUpWindow = connect(mapStateToProps,mapDispatchToProps)(PopUpWindow)
  
  export default ConnectedPopUpWindow;

