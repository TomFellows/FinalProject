import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../App.css'

import ProfileSidebar from './ProfileSidebar'
import ConnectionsSidebar from './ConnectionsSidebar'
import PageContent from './PageContent.js'

import LandingPage from './LandingPage';

class GlobalContainer extends Component {
    

    render () {

        let content = '';

        if (this.props.connected === true) {

            content = (<div className = "cont">
            <div className = "col1">
            <ProfileSidebar />
            </div>
            <div className = "col2">
            <PageContent/>
            </div>
            <div className = "col3">
             <ConnectionsSidebar/>
            </div>
            </div>)
        } else {
            content = <LandingPage/>
        }


        return content
    }

}

let mapStateToProps = (state) => {
    return {currentUser: state.currentUser, connected: state.connected, popUp: state.popUp}
  }

  
  let ConnectedGlobalContainer = connect(mapStateToProps)(GlobalContainer)
  
  export default ConnectedGlobalContainer;