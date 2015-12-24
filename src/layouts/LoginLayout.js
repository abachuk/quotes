import React from 'react'
import 'styles/core.scss'

export default class LoginLayout extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  }

  render () {
    return (
      <div className='page-container login-container core__login-container'>
        <div className='col-md-6 core__col-md-6'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
