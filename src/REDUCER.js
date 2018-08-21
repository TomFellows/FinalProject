import {createStore} from 'redux'
import {POPUP, SETCURRENTUSER, SETCURRENTCONNECTIONS, OPENCHAT} from './ACTIONS.js'

function reducer (state, action) {

    if (action.type === POPUP) {
      return {...state, popUp: action.popUpType}
    }

    if (action.type === SETCURRENTUSER) {

      return {...state, connected: action.connected, currentUser: action.user}
    }

    if (action.type === SETCURRENTCONNECTIONS) {

      return {...state, currentConnections: action.connections}
    }

    if (action.type === OPENCHAT) {

      return {...state, openedChat: action.user}
    }


    return state
  }

  //Not sure if we are gonna use a currentUser state since we are using google login
  const store = createStore(reducer, 
    {connected: false, currentUser: { userId: '', email: '', firstName: '', lastName: '', instruments: [],
                    location: '', seeking: '', skillLevel: '', styles: [], review: [], connections: [], notifications: []}, 
    currentConnections: [], popUp: false, openedChat: undefined},

    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  export default store;