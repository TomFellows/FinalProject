import {createStore} from 'redux'
import {ACTION1, ACTION2, POPUP} from './ACTIONS.js'

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
  
    return state
  }

  //Not sure if we are gonna use a currentUser state since we are using google login
  const store = createStore(reducer, {currentUser: '', popUp: false},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  export default store;