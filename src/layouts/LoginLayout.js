import React from 'react'
import styles from '../styles/LoginStyles.scss'

export default class LoginLayout extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
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
