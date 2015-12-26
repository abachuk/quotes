import { createAction, handleActions } from 'redux-actions'
// import createReducer from 'utils/createReducer'
import Firebase from 'firebase'
import constants from 'utils/constants'

const ref = new Firebase(constants.FIREBASE + '/quotes')
let quotes = 'yo'

ref.on('value', function (snapshot) {
  quotes = snapshot.val()
}, function (errorObject) {
  console.log('The read failed: ' + errorObject.code)
})

// ------------------------------------
// Constants
// ------------------------------------
const GETQUOTES = 'GETQUOTES'

// ------------------------------------
// Actions
// ------------------------------------
export const getQuotes = createAction(GETQUOTES, (value = quotes) => value)
export const actions = {
  getQuotes
}

// ------------------------------------
// Reducer
// ------------------------------------
// export default createReducer({}, {
//   [LOGIN]: (state) => authData
// })
//

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [GETQUOTES]: (state, { payload }) => state + payload
}, quotes)
