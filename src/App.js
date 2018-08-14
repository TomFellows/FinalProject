import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar.js'
import ProfileSidebar from './Components/ProfileSidebar'
import ConnectionsSidebar from './Components/ConnectionsSidebar'
import Homepage from './Components/Homepage'
import OtherUserProfile from './Components/OtherUserProfile'


import {Provider} from 'react-redux'
import store from './REDUCER.js'



class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Navbar />
<div className = "flex">
        <ProfileSidebar />
        <OtherUserProfile/>
        <ConnectionsSidebar />
</div>
      </div>
      </Provider>
    );
  }
}

export default App;
