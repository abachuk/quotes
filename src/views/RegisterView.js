import React from 'react'
import 'styles/core.scss'
import Firebase from 'firebase'
import constants from 'utils/constants'
import { actions as authActions } from '../redux/modules/auth'
import { connect } from 'react-redux'
import { Link } from 'react-router'

const ref = new Firebase(constants.FIREBASE)
// let auth = ref.getAuth()
// import { Link } from 'react-router'

const mapStateToProps = (state) => ({
  auth: state.auth
})

export class RegisterView extends React.Component {

  static propTypes = {
    history: React.PropTypes.object,
    login: React.PropTypes.func
  }

  handleSubmit (e) {
    e.preventDefault()
    console.log(this)
    let email = this.refs.email.value
    let password = this.refs.password.value
    let invite = this.refs.invite.value
    let self = this

    if(invite === 'bachuk') {
    ref.createUser({
      'email': email,
      'password': password
    }, function (error, authData) {
      if (error) {
        console.log('Login Failed!', error)
      } else {
        console.log(self)
        console.log('registered with', authData)
        self.props.history.pushState(null, '/')
        self.props.login(authData)
      }
    })
    } else {
      console.log('invite is incorrect')
    }
  }

  render () {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className='form-group'>
            <label htmlFor='username'>Email address</label>
            <input type='email' ref='email' className='form-control' id='username' placeholder='Email' />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' ref='password' className='form-control' id='password' placeholder='Password' />
          </div>
          <div className='form-group'>
            <label htmlFor='repeat-password'>Password</label>
            <input type='password' ref='repeatPassword' className='form-control' id='repeat-password' placeholder='Repeat Password' />
          </div>
          <div className='form-group'>
            <label htmlFor='invite'>Invite</label>
            <input type='invite' ref='invite' className='form-control' id='invite' placeholder='Invite Code' />
          </div>

          <button type='submit' className='btn btn-default'>Register</button> or <Link to='/login'>Login</Link>
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, authActions)(RegisterView)
