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

const mapStateToProps = (state, props) => ({
  auth: state.auth,
  quote: props.route.name === 'edit' ? state.quote : ''
})

export class QuotesNew extends React.Component {

  static propTypes = {
    auth: React.PropTypes.object,
    fields: React.PropTypes.object.isRequired,
    handleSubmit: React.PropTypes.func.isRequired,
    resetForm: React.PropTypes.func.isRequired,
    submitting: React.PropTypes.bool.isRequired,
    getQuote: React.PropTypes.func,
    route: React.PropTypes.object,
    statename: React.PropTypes.object,
    clearQuote: React.PropTypes.func,
    params: React.PropTypes.object,
    history: React.PropTypes.object
  }

  componentDidMount (state) {
    if (this.props.route.name === 'edit') {
      this.props.getQuote(this.props.params.id)
    }
  }

  handleSubmit (e) {
    e.preventDefault()

    let fields = this.props.fields
    let userId = this.props.auth.uid
    let image = _.first(fields.image.value)
    let imageBase64
    let fr = new FileReader()
    let quote = {
      title: fields.title ? fields.title.value : '',
      description: fields.description ? fields.description.value : '',
      author: fields.author ? fields.author.value : '',
      category: fields.category ? fields.category.value : '',
      createdBy: userId,
      createdAt: new Date(),
      tags: fields.tags ? fields.tags.value : []
    }

    let onComplete = function (error) {
      if (error) {
        alert('there was an error')
      } else {
        this.props.history.pushState(null, '/quotes/all')
      }
    }.bind(this)

    let pushToFirebase = function () {
      if (this.props.route.name === 'new') {
        quotesRef.push(quote)
      } else {
        let quoteId = this.props.params.id
        let currentQuote = ref.child('quotes/' + quoteId)
        currentQuote.update(quote, onComplete)
      }
    }.bind(this)

    if (image && image.name) {
      fr.onloadend = function (res) {
        imageBase64 = res.currentTarget.result
        quote.image = imageBase64
        pushToFirebase()
      }

      fr.readAsDataURL(image)
    } else {
      pushToFirebase()
    }
  }

  updateQuote (e) {
    let currentQuote = quotesRef.child(this.props.params.id)
    console.log(currentQuote)
  }

  render () {
    const {
      fields: {title, description, author, tags, category, image},
      resetForm
    } = this.props

    let header = this.props.route.name === 'edit' ? 'Edit quote' : 'New Quote'
    let btnLabel = this.props.route.name === 'edit' ? 'Update the quote' : 'Create new quote'
    let { value, ...imageProps } = image

    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h1>{header}</h1>

          <div className='form-group'>
            <label forHtml='title'>Title</label>
            <input type='text' className='form-control' id='title' placeholder='Title (optional)' ref='title' {...title} />
          </div>

          <div className='form-group'>
            <label forHtml='description'>Description</label>
            <textarea className='form-control' rows='4' id='description' ref='description' placeholder='text or descriptions' {...description} />
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
            <input type='file' className='form-control' id='image' placeholder='background image' ref='image' {...image} value={null} />
          </div>

          <input type='submit' value={btnLabel} className='btn btn-primary' />
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
function (state, props) {
  if (props.route.name === 'edit') {
    return {initialValues: state.quote}
  }
}
)(QuotesNew)

export default connect(mapStateToProps, quoteActions)(QuotesNew)
