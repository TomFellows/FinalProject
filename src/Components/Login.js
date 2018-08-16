import React, { Component } from 'react';
import '../CSS/Navbar.css'
import key from '../firebaselogin.js'

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

  }

  loginGoogle () {

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
        .then((response) =>{
          alert(JSON.parse(response).status)
        })
      })
      

    })

  }
    

    render () {

        return(<button onClick={this.loginGoogle}>Login with Google</button>)

    }
}

export default Login
