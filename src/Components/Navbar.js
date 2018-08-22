import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom'
import '../CSS/Navbar.css'
import Login from './Login.js'
import Filters from './Filters.js'
import {connect} from 'react-redux'
import { SETCURRENTUSER } from '../ACTIONS';
import NotificationsList from './NotificationsList';





class Navbar extends Component {

  componentDidMount = () => {

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


  logout = (event) => {
    event.preventDefault()
    fetch('/logout')
    .then(() => {

      this.props.setCurrentUser({}, 'landingPage')
      this.props.history.push('/');
    })
  }
 

  


  render() {

    let connectionStatus;

    let notifications = (<div></div>)



    if (this.props.connected === 'connected') {

    notifications = <NotificationsList/>


      connectionStatus = (<div>Connected as {this.props.currentUser.firstName}&nbsp;
        | &nbsp;<Link to='/Profile' className = "links">My profile</Link>&nbsp; 
        | &nbsp;<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Notifications" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        Notifications</button>&nbsp;
        | &nbsp;<Link to='/logout' onClick={this.logout} className = "links">Log out</Link></div>)
    } else {
      connectionStatus = (<Login/>)
    }

    return (
      <div >
        <nav className = "Navbar" class="navbar fixed-top  navbar-light bg-light">
        {/* <nav className="Navbar" class="navbar navbar-expand-lg navbar-light bg-light"> */}
          <a class="navbar-brand" href="#"><Link className = "git" to='/'>GigHub
          <img className="logo" src="/Images/headphonesOrangeRed.png"></img></Link></a>
      
           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Filters" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className = "findCon">Find connections</span>
            </button>
            {connectionStatus}
          

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
              </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>


          <div class="collapse navbar-collapse" id='Filters'>
            <Filters/>
          </div>
          <div class="collapse navbar-collapse" id='Notifications'>
           {notifications}
          </div>
        </nav>
        
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {currentUser: state.currentUser, popUp: state.popUp, connected: state.connected}
}

let mapDispatchToProps = (dispatch) => {
  return {setCurrentUser: (user, connected) => dispatch({type: SETCURRENTUSER, user: user, connected: connected})
  }
}

let ConnectedNavbar = connect(mapStateToProps,mapDispatchToProps)(Navbar)

export default withRouter(ConnectedNavbar);