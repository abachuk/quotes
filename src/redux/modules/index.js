import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import counter from './counter'
import auth from './auth'

export default combineReducers({
  counter,
  router: routeReducer,
  auth: auth
})
