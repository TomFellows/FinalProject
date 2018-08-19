import React, { Component } from 'react'
import socketIO from 'socket.io-client'

class Chat extends Component {

    componentDidMount = () => {

        const socket = socketIO()
    }

    render () {

        return (<div></div>)
    }
}