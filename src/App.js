import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar.js'
import ProfileSidebar from './Components/ProfileSidebar'
import ConnectionsSidebar from './Components/ConnectionsSidebar'
import Homepage from './Components/Homepage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
<div className = "flex">
        <ProfileSidebar />
        <Homepage />
        <ConnectionsSidebar />
</div>
      </div>
    );
  }
}

export default App;
