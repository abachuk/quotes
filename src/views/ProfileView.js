import React from 'react'
import 'styles/core.scss'
import {reduxForm} from 'redux-form'
import { connect } from 'react-redux'
import { actions as profileActions } from '../redux/modules/profile'

export const fields = ['name', 'bio', 'photo']

const mapStateToProps = (state, props) => ({
  auth: state.auth,
  profile: state.profile
})

export class ProfileView extends React.Component {
  static propTypes = {
    fields: React.PropTypes.object.isRequired,
    resetForm: React.PropTypes.func.isRequired,
    getProfile: React.PropTypes.func,
    params: React.PropTypes.object,
    profile: React.PropTypes.object
  }

  componentDidMount () {
    this.props.getProfile(this.props.params.id)
    console.log(this.props.profile)
  }

  handleSubmit (e) {

  }

  render () {
    const {
      fields: {name, bio, photo},
      resetForm
    } = this.props

    return (
      <div className='container'>
      <h1>My profile</h1>

        <form onSubmit={this.handleSubmit.bind(this)}>

          <div className='form-group'>
            <label forHtml='name'>Name</label>
            <input type='text' className='form-control' id='name' placeholder='Name' ref='name' {...name} />
          </div>

          <div className='form-group'>
            <label forHtml='bio'>Short Bio</label>
            <textarea className='form-control' rows='4' id='bio' ref='bio' placeholder='short bio' {...bio} />
          </div>

          <div className='form-group'>
            <label forHtml='photo'>Background</label>
            <input type='file' className='form-control' id='photo' placeholder='photo' ref='photo' {...photo} value={null} />
          </div>

          <input type='submit' value='Update' className='btn btn-primary' />
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

export default connect(mapStateToProps, profileActions)(ProfileView)
