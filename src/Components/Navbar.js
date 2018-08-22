import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom'
import '../CSS/Navbar.css'
import Login from './Login.js'
import Filters from './Filters.js'
import {connect} from 'react-redux'
import { SETCURRENTUSER } from '../ACTIONS';
import NotificationsList from './NotificationsList';




class Navbar extends Component {
  constructor(){
    super()
    this.state = {connected: false}
  }

  constructor () {
    super()

    this.state = {inputSearchValue: ''}

    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
  }

  componentDidMount = () => {

    fetch('/getCurrentUser', {
      credentials: 'same-origin'
    }).then(response => response.text())
      .then((response) => {

        let parsedResponse = JSON.parse(response)

        if (parsedResponse.user) {
        let currentUser = parsedResponse.user
        this.setState({connected: true})
        this.props.setCurrentUser(JSON.parse(JSON.stringify(currentUser)), 'connected')
      } else {
        this.setState({connected: false})
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
 
  handleSearchChange(event) {
    this.setState({inputSearchValue: event.target.value})
  }

  handleSearchSubmit(event) {
    event.preventDefault()

    fetch('/globalSearch', {
      method: 'POST',
      body: JSON.stringify({keyword: this.setState.inputSearchValue})
    })
    .then(response => response.text())
    .then(response => {
      let parsedResponse = JSON.parse(response)

      let results = parsedResponse.users

      this.props.history.push({
          pathname: '/FindConnections',
          users: results})
    })

  }

  


  render() {

    let profileLogout;
    let connectedAsNotifications;
    let notifications = (<div></div>)
    let searchItems;


    if (this.props.connected === 'connected') {

    notifications = <NotificationsList/>

      searchItems = (<div className='searchItems'>
        <form class="form-inline" onSubmit={this.handleSearchSubmit}>
              <input class="form-control" value={this.state.inputSearchValue} 
              onChange={this.handleSearchChange}type="search" placeholder="Quick search..." aria-label="Search" />
            </form>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Filters" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className = "findCon">Find connections</span>
      </button>
      </div>)

      connectedAsNotifications = (<div>
        <div className = "text"> 
        Connected as <Link to='/Profile' className = "links">{this.props.currentUser.firstName}</Link>&nbsp;</div>&nbsp;
        | &nbsp;<button class="navbar-toggler links" type="button" data-toggle="collapse" data-target="#Notifications" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        Notifications</button>&nbsp;
        </div>)


      profileLogout = (<div>
       &nbsp;<Link to='/Profile' className = "links">Edit profile</Link>&nbsp; 
        | &nbsp;<Link to='/logout' onClick={this.logout} className = "links">Log out</Link></div>)
    } else {
      profileLogout = (<Login/>)
    }

    return (
      <div>
        <nav class="navbar fixed-top  navbar-light bg-light">
          <div><a class="navbar-brand" href="#"><Link className = "git" to='/'>GigHub
          <img className="logo" src="/Images/headphone.png"></img></Link></a>
          {searchItems}
          </div>
      
        
          {connectedAsNotifications}
          
           
          {profileLogout}

          


          <div class="collapse navbar-collapse" id='Filters'>
            <Filters/>
          </div>
          <div class="collapse navbar-collapse" id='Notifications'>
           <div className='notificationsList'>{notifications}</div>
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