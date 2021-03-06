import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import '../CSS/PageContent.css'
import FindConnections from './FindConnections.js'
import Homepage from './Homepage.js'
import UserProfile from './UserProfile.js'
import OtherUserProfile from './OtherUserProfile.js'


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

    renderOtherUserProfile (routerData) {

        let renderedUsername = routerData.match.params.username

        return (<div className = "color">
            <OtherUserProfile key={renderedUsername} username={renderedUsername}/>
            </div>)
    }

    renderFindConnections () {
        return (<div>
            <FindConnections/>
            </div>)
    }

    render () {
        return(<div className ="height"> 
        <Route exact={true} path='/' render={this.renderHomePage} />
        <Route exact={true} path='/Profile' render={this.renderUserProfile} />
        <Route exact={true} path='/FindConnections' render={this.renderFindConnections} />
        <Route exact={true} path='/OtherUserProfile/:username' render={this.renderOtherUserProfile} />
        </div>)
    }

}

export default PageContent;