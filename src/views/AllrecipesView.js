import React from 'react'
import 'styles/core.scss'
// import Firebase from 'firebase'
// import constants from 'utils/constants'
// import { actions as authActions } from '../redux/modules/auth'
// import { connect } from 'react-redux'
// import { createHistory } from 'history'

// let history = createHistory()
// import { history } from 'react-router'

// const ref = new Firebase(constants.FIREBASE)
// let auth = ref.getAuth()
// import { Link } from 'react-router'

// const mapStateToProps = (state) => ({
//   auth: state.auth
// })

export class AllrecipesView extends React.Component {
  render () {
    return (
      <form>
        <h1>New</h1>
        <input type='text' />
      </form>
    )
  }
}

export default AllrecipesView
