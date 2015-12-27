import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import {reducer as formReducer} from 'redux-form'
import counter from './counter'
import auth from './auth'
import getquotes from './getquotes'

export default combineReducers({
  counter,
  router: routeReducer,
  auth: auth,
  quotes: getquotes,
  form: formReducer.normalize({
    newQuote: {
      tags: value => value && value.toString().split(',')
    }
  })
})
