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
import LandingPage from './Components/LandingPage';



class App extends Component {
  render() {
    return (<LandingPage/>
      // <BrowserRouter>
      // <Provider store={store}>
      // <div>
      //   <Navbar />
     
     
      //   <div className = "cont">
      //      <div className = "col1">
      //      <ProfileSidebar />
      //      </div>
      //      <div className = "col2">
      //      <PageContent/>
      //      </div>
      //      <div className = "col3">
      //       <ConnectionsSidebar/>
      //      </div>
      //   </div>
      //   </div>
      // </Provider>
      // </BrowserRouter> 
      
     );
  }
}

export default App;
