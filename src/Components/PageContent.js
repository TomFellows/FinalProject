import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import FindConnections from './FindConnections.js'
import Homepage from './Homepage.js'
import UserProfile from './UserProfile.js'
import OtherUserProfile from './OtherUserProfile.js'

import '../CSS/PageContent.css'

class PageContent extends Component {


    constructor () {

        super()

        this.renderHomePage = this.renderHomePage.bind(this)
        this.renderUserProfile = this.renderUserProfile.bind(this)
        this.renderFindConnections = this.renderFindConnections.bind(this)
        this.renderOtherUserProfile = this.renderOtherUserProfile.bind(this)

    }

    renderHomePage () {
        return (<div>
            <Homepage/>
            </div>)
    }

    renderUserProfile () {
        return (<div>
            <UserProfile/>
            </div>)
    }

    renderOtherUserProfile () {
        return (<div className = "color">
            <OtherUserProfile/>
            </div>)
    }

    renderFindConnections () {
        return (<div>
            <FindConnections/>
            </div>)
    }

    render () {
        return(<div className='pageContent'>
        <Route exact={true} path='/' render={this.renderHomePage} />
        <Route exact={true} path='/Profile' render={this.renderUserProfile} />
        <Route exact={true} path='/FindConnections' render={this.renderFindConnections} />
        <Route exact={true} path='/OtherUserProfile' render={this.renderOtherUserProfile} />
        </div>)
    }

}

export default PageContent;