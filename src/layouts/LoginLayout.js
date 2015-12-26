import React from 'react'
import styles from '../styles/LoginStyles.scss'

export default class LoginLayout extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  }

  render () {
    return (
      <div className={styles['login-container']}>
        <div className='col-md-6 core__col-md-6'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
