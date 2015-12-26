import { createAction, handleActions } from 'redux-actions'
// import createReducer from 'utils/createReducer'
import Firebase from 'firebase'
import constants from 'utils/constants'

const ref = new Firebase(constants.FIREBASE + '/quotes')
let quotes = ref.on('value', function (snapshot) {
  return snapshot.val()
  console.log(quotes)
}, function (errorObject) {
  console.log('The read failed: ' + errorObject.code)
})

// ------------------------------------
// Constants
// ------------------------------------
const GET_QUOTES = 'GET_QUOTES'
const FETCH_QUOTES = 'FETCH_QUOTES'
const FETCH_STARTED = 'FETCH_STARTED'

// ------------------------------------
// Actions
// ------------------------------------
export const fetch = () => {
    return (dispatch) => {
      ref.on('value', snapshot => dispatch({
        type: GET_QUOTES,
        payload: dataFromSnapshot(snapshot)
      }))
    }
  }

export const getQuotes = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_STARTED })
    dispatch(fetch())
  }
}

function dataFromSnapshot(snapshot) {
  let data = snapshot.val()
  return data
}

export const actions = {
  fetch,
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
  [GET_QUOTES]: (state, { payload }) => state + payload
}, quotes)
