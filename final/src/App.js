import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar.js'
import ProfileSidebar from './Components/ProfileSidebar'
import ConnectionsSidebar from './Components/ConnectionsSidebar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
<div className = "flex">
        <ProfileSidebar />
        <ConnectionsSidebar />
</div>
      </div>
    );
  }
}

export default App;
