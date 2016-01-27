import React from 'react'
import 'styles/core.scss'
import {reduxForm} from 'redux-form'

export const fields = ['name', 'bio', 'photo']

export class ProfileView extends React.Component {

  handleSubmit (e) {

  }

  render () {
    return (
      <div className='container'>
      <h1>My profile</h1>

        <form onSubmit={this.handleSubmit.bind(this)}>

          <div className='form-group'>
            <label forHtml='name'>Name</label>
            <input type='text' className='form-control' id='title' placeholder='Name' ref='name' {...name} />
          </div>

          <div className='form-group'>
            <label forHtml='bio'>Short Bio</label>
            <textarea className='form-control' rows='4' id='bio' ref='bio' placeholder='short bio' {...bio} />
          </div>

          <div className='form-group'>
            <label forHtml='photo'>Background</label>
            <input type='file' className='form-control' id='photo' placeholder='photo' ref='photo' {...photo} value={null} />
          </div>

          <input type='submit' value={btnLabel} className='btn btn-primary' />
          <input type='button' value='Reset' className='btn btn-danger' onClick={resetForm} />
        </form>
      </div>
    )
  }
}

ProfileView = reduxForm({
  form: 'profileForm',
  fields
})(ProfileView)

export default ProfileView
