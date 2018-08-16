import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import FindConnections from './FindConnections.js'
import Homepage from './Homepage.js'
import UserProfile from './UserProfile.js'

import '../CSS/PageContent.css'

class PageContent extends Component {


    constructor () {

        super()

        this.renderHomePage = this.renderHomePage.bind(this)
        this.renderUserProfile = this.renderUserProfile.bind(this)
        this.renderFindConnections = this.renderFindConnections.bind(this)

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
        </div>)
    }


}

export default PageContent;