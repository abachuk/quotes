import React from 'react'
import styles from '../styles/LoginStyles.scss'
import { connect } from 'react-redux'

const mapStateToProps = (state, props) => ({
  auth: state.auth
})

export class LoginLayout extends React.Component {

  static propTypes = {
    children: React.PropTypes.element,
    history: React.PropTypes.object,
    login: React.PropTypes.func,
    auth: React.PropTypes.object
  }

  componentDidMount () {
    if (this.props.auth) {
      this.props.history.pushState(null, '/profile')
    }
    console.log(this)
  }

  render () {
    return (
      <div className={styles['login-container']}>
        <div className={styles['login-forms']} history={this.props.children.props.history} >
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(LoginLayout)
