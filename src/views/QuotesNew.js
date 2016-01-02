import React from 'react'
import 'styles/core.scss'
import Firebase from 'firebase'
import { connect } from 'react-redux'
import constants from 'utils/constants'
import { actions as quoteActions } from '../redux/modules/quote'
import {reduxForm} from 'redux-form'

const ref = new Firebase(constants.FIREBASE)
const quotesRef = ref.child('quotes')
export const fields = ['title', 'description', 'author', 'tags', 'category', 'image']

const mapStateToProps = (state) => ({
  auth: state.auth,
  quote: state.quote
})

export class QuotesNew extends React.Component {

  static propTypes = {
    auth: React.PropTypes.object,
    fields: React.PropTypes.object.isRequired,
    handleSubmit: React.PropTypes.func.isRequired,
    resetForm: React.PropTypes.func.isRequired,
    submitting: React.PropTypes.bool.isRequired,
    getQuote: React.PropTypes.func
  }

  componentDidMount () {
    this.props.getQuote()
    console.log(this)
  }

  handleFile (fieldName, e) {
    e.preventDefault()
    console.log(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    console.log(this.props.fields)
    let fields = this.props.fields
    let userId = this.props.auth.uid

    quotesRef.push({
      title: fields.title ? fields.title.value : '',
      text: fields.description ? fields.description.value : '',
      author: fields.author ? fields.author.value : '',
      category: fields.category ? fields.category.value : '',
      createdBy: userId,
      createdAt: new Date(),
      tags: fields.tags ? fields.tags.value : []
      // image: fields.image ? fields.image.value : ''
    })
  }

  render () {
    const {
      fields: {title, description, author, tags, category, image},
      resetForm,
      submitting
    } = this.props

    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h1>New Quote</h1>

          <div className='form-group'>
            <label forHtml='title'>Title</label>
            <input type='text' className='form-control' id='title' placeholder='Title (optional)' ref='title' {...title} />
          </div>

          <div className='form-group'>
            <label forHtml='description'>Description</label>
            <textarea className='form-control' rows='4' id='description' ref='description' placeholder='text or description' {...description} />
          </div>

          <div className='form-group'>
            <label forHtml='author'>Author</label>
            <input type='text' className='form-control' id='author' placeholder='author' ref='author' {...author} />
          </div>

          <div className='form-group'>
            <label forHtml='category'>Category</label>
            <input type='text' className='form-control' id='category' placeholder='category (quote, joke, etc)' ref='category' {...category} />
          </div>

          <div className='form-group'>
            <label forHtml='tags'>Tags</label>
            <input type='text' className='form-control' id='tags' placeholder='tags (comma separated)' ref='tags' {...tags} />
          </div>

          <div className='form-group'>
            <label forHtml='image'>Background</label>
            <input type='file' className='form-control' id='image' onChange={this.handleFile.bind(this, 'image')} placeholder='background image' ref='image' {...image} />
          </div>

          <input type='submit' value='Create quote' className='btn btn-primary' />
          <input type='button' value='Reset' className='btn btn-danger' onClick={resetForm} />
        </form>
      </div>
    )
  }
}

QuotesNew = reduxForm({
  form: 'newQuote',
  fields,
  normalize: ['tags']
},
  state => ({
    // initialValues: state.quote // will pull state into form's initialValues
  })
)(QuotesNew)

export default connect(mapStateToProps, quoteActions)(QuotesNew)
