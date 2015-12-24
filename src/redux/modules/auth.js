import { createAction, handleActions } from 'redux-actions'
// import createReducer from 'utils/createReducer'
import Firebase from 'firebase'
import constants from 'utils/constants'

const ref = new Firebase(constants.FIREBASE)
let authData = ref.getAuth() || {}

console.log(authData)

// ------------------------------------
// Constants
// ------------------------------------
const LOGIN = 'LOGIN'
// const AUTH = 'AUTH'
const REGISTER = 'REGISTER'

// ------------------------------------
// Actions
// ------------------------------------
// export const login = () => ({ type: LOGIN })
export const login = createAction(LOGIN, (value = authData) => value)
export const register = () => ({ type: REGISTER })
export const actions = {
  login, register
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
  [LOGIN]: (state, { payload }) => state + payload
}, authData)
