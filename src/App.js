import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'


import './App.css';
import Navbar from './Components/Navbar.js'
import ProfileSidebar from './Components/ProfileSidebar'
import ConnectionsSidebar from './Components/ConnectionsSidebar'
import PageContent from './Components/PageContent.js'
import OtherUserProfile from './Components/OtherUserProfile'


import {Provider} from 'react-redux'
import store from './REDUCER.js'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
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
      </BrowserRouter>
    );
  }
}

export default App;
