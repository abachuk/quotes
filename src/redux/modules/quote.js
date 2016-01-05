import { handleActions } from 'redux-actions'
// import createReducer from 'utils/createReducer'
import Firebase from 'firebase'
import constants from 'utils/constants'


let quote = {}

// ------------------------------------
// Constants
// ------------------------------------
const GET_QUOTE = 'GET_QUOTES'
const FETCH_STARTED = 'FETCH_STARTED'

// ------------------------------------
// Actions
// ------------------------------------
export const fetch = (id) => {
  const ref = new Firebase(constants.FIREBASE + '/quotes/' + id)
  return (dispatch) => {
    ref.on('value', snapshot => dispatch({
      type: GET_QUOTE,
      payload: dataFromSnapshot(snapshot)
    }))
  }
}

export const getQuote = (id) => {
  return (dispatch) => {
    dispatch({ type: FETCH_STARTED })
    dispatch(fetch(id))
  }
}

function dataFromSnapshot (snapshot) {
  let data = snapshot.val()
  return data
}

export const actions = {
  fetch,
  getQuote
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [GET_QUOTE]: (state, { payload }) => payload
}, quote)
