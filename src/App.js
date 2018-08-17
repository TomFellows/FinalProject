import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'


import './App.css';
import Navbar from './Components/Navbar.js'
import GlobalContainer from './Components/GlobalContainer.js'



import {Provider} from 'react-redux'
import store from './REDUCER.js'




class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Provider store={store}>
      <div>
        <Navbar />
        <GlobalContainer/>

        
       </div>
      </Provider>
      </BrowserRouter> 
      
     );
  }
}

export default App;
