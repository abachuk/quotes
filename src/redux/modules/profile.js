import { createAction, handleActions } from 'redux-actions'
// import createReducer from 'utils/createReducer'
import Firebase from 'firebase'
import constants from 'utils/constants'

const ref = new Firebase(constants.FIREBASE)
let authData = ref.getAuth() || {}


// ------------------------------------
// Constants
// ------------------------------------
const GET_PROFILE = 'GET_PROFILE'
const PROFILE = 'PROFILE'

// ------------------------------------
// Actions
// ------------------------------------
// export const login = () => ({ type: LOGIN })
export const fetch = (id) => {
  const ref = new Firebase(constants.FIREBASE + '/users')
  return (dispatch) => {
    ref.on('value', snapshot => dispatch({
      type: GET_PROFILE,
      payload: dataFromSnapshot(snapshot)
    }))
  }
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
  [GET_PROFILE]: (state, { payload }) => state + payload
}, authData)
