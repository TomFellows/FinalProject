import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../CSS/Navbar.css'
import '../CSS/Login.css'
import key from '../firebaselogin.js'
import { SETCURRENTUSER } from '../ACTIONS';

var firebase = require('firebase');

var config = {
  apiKey: key,
  authDomain: "final-app-63dc4.firebaseapp.com",
  databaseURL: "https://final-app-63dc4.firebaseio.com",
  projectId: "final-app-63dc4",
  storageBucket: "final-app-63dc4.appspot.com",
  messagingSenderId: "759869307475"
}
firebase.initializeApp(config);

var provider = new firebase.auth.GoogleAuthProvider();

class Login extends Component {

  constructor () {
    super()

    this.loginGoogle = this.loginGoogle.bind(this)
    this.setUserAfterLogin = this.setUserAfterLogin.bind(this)

  }

  loginGoogle () {

    let setUser = this.setUserAfterLogin

    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      //var token = result.credential.accessToken;
      
      // The signed-in user info.
      var user = result.user;
      user.getIdToken().then(token => {

       fetch('/sessionLogin', {
          method: 'POST',
          body: JSON.stringify({idToken: token}),
          credentials: 'same-origin'

      }).then(response=>response.text())
        .then(setUser)
      })
      

    })
      

  }
    
  setUserAfterLogin () {
    fetch('/getCurrentUser', {
      credentials: 'same-origin'
    }).then(response => response.text())
      .then((response) => {

        let parsedResponse = JSON.parse(response)

        if (parsedResponse.user) {
          let currentUser = parsedResponse.user

          this.props.setCurrentUser(JSON.parse(JSON.stringify(currentUser)), 'connected')
      } else {

        this.props.setCurrentUser({}, 'landingPage')
      }

      }).catch((err) => {

        let currentUser =  {
            firstName: 'Unavailable', lastName: 'Unavailable', instruments: 'Unavailable',
            location: 'Unavailable', seeking: 'Unavailable', skillLevel: 'Unavailable', musicalStyles: 'Unavailable'
        }

        this.props.setCurrentUser(currentUser, 'landingPage')
      })
  
  }




  render() {

    return (<button onClick={this.loginGoogle}>Login with Google</button>)

  }
}

let mapStateToProps = (state) => {
  return {currentUser: state.currentUser, popUp: state.popUp, connected: state.connected}
}

let mapDispatchToProps = (dispatch) => {
  return {setCurrentUser: (user, connected) => dispatch({type: SETCURRENTUSER, user: user, connected: connected})
  }
}

let ConnectedLogin = connect(mapStateToProps,mapDispatchToProps)(Login)

export default ConnectedLogin