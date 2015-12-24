import React from 'react'
import Firebase from 'firebase'
import constants from 'utils/constants'
import { actions as authActions } from '../redux/modules/auth'
import { connect } from 'react-redux'
import { createHistory } from 'history'

let history = createHistory()
// import { Link } from 'react-router'

const ref = new Firebase(constants.FIREBASE)

const mapStateToProps = (state) => ({
  auth: state.auth
})

export class NewRecipeForm extends React.Component {
  static propTypes = {
    history: React.PropTypes.object
  }

  handleSubmit (e) {
    e.preventDefault()
  }

  render () {
    return (
      <form>
        <input type='text' />
      </form>
    )
  }
}

export default connect(mapStateToProps, authActions)(NewRecipeForm)
