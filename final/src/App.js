import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar.js'
import ProfileSidebar from './Components/ProfileSidebar'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar/>
       <ProfileSidebar/>
      </div>
    );
  }
}

export default App;
