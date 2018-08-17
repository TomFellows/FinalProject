import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../App.css'

import ProfileSidebar from './ProfileSidebar'
import ConnectionsSidebar from './ConnectionsSidebar'
import PageContent from './PageContent.js'

import LandingPage from './LandingPage';

class GlobalContainer extends Component {
    

    render () {

        let connected = this.props.connected

        let content = '';

        if (this.props.connected) {

            content = (<div className = "cont">
            <div className = "col1">
            {connected ? <ProfileSidebar /> : null}
            </div>
            <div className = "col2">
            {connected ?  <PageContent/> : null}
            </div>
            <div className = "col3">
            {connected ?   <ConnectionsSidebar/> : null}
            </div>
            </div>)
        } else {
            content = (<div>{connected ? <LandingPage/> : null}</div>)
        }


        return content
    }

}

let mapStateToProps = (state) => {
    return {currentUser: state.currentUser, connected: state.connected, popUp: state.popUp}
  }

  
  let ConnectedGlobalContainer = connect(mapStateToProps)(GlobalContainer)
  
  export default ConnectedGlobalContainer;