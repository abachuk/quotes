import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import {reducer as formReducer} from 'redux-form'
import counter from './counter'
import auth from './auth'
import getquotes from './getquotes'
import getquote from './quote'
import profile from './profile'

export default combineReducers({
  counter,
  router: routeReducer,
  auth: auth,
  quotes: getquotes,
  quote: getquote,
  profile: profile,
  form: formReducer.normalize({
    newQuote: {
      tags: value => value && value.toString().split(',')
    }
  })
})
