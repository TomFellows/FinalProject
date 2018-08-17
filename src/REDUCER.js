import {createStore} from 'redux'
import {ACTION1, ACTION2, POPUP, SETCURRENTUSER, SETCURRENTCONNECTIONS} from './ACTIONS.js'

function reducer (state, action) {

    if (action.type === ACTION1) {
      return state
    }
    if (action.type === ACTION2) {
      return state
    }
    if (action.type === POPUP) {
      return {...state, popUp: action.popUpType}
    }

    if (action.type === SETCURRENTUSER) {

      return {...state, connected: true, currentUser: action.user}
    }

    if (action.type === SETCURRENTCONNECTIONS) {

      return {...state, currentConnections: action.connections}
    }


    return state
  }

  //Not sure if we are gonna use a currentUser state since we are using google login
  const store = createStore(reducer, 
    {connected: false, currentUser: { userId: '', email: '', firstName: '', lastName: '', instruments: [],
                    location: '', seeking: '', skillLevel: '', styles: [], review: [], connections: []}, 
    currentConnections: [], popUp: false},

    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  export default store;