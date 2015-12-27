import React from 'react'
import 'styles/core.scss'
import Firebase from 'firebase'
import constants from 'utils/constants'
import { connect } from 'react-redux'

const ref = new Firebase(constants.FIREBASE)
const quotesRef = ref.child('quotes')

const mapStateToProps = (state) => ({
  auth: state.auth
})

export class QuotesNew extends React.Component {

  static propTypes = {
    auth: React.PropTypes.object
  }

  addOne (e) {
    e.preventDefault()
    console.log(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    console.log(this)

    let title = this.refs.title.value
    let description = this.refs.description.value
    let author = this.refs.author.value
    let category = this.refs.category.value
    let userId = this.props.auth.uid
    let tags = (this.props.tags.uid).split(',')

    quotesRef.push({
      title: title,
      text: description,
      author: author,
      category: category,
      createdBy: userId,
      createdAt: new Date(),
      tags: tags
    })
  }

  render () {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h1>New Quote</h1>

          <div className='form-group'>
            <label forHtml='title'>Title</label>
            <input type='text' className='form-control' id='title' placeholder='Title (optional)' ref='title' />
          </div>

          <div className='form-group'>
            <label forHtml='description'>Description</label>
            <textarea className='form-control' rows='4' id='description' ref='description' placeholder='text or description' />
          </div>

          <div className='form-group'>
            <label forHtml='author'>Author</label>
            <input type='text' className='form-control' id='author' placeholder='author' ref='author' />
          </div>

          <div className='form-group'>
            <label forHtml='category'>Category</label>
            <input type='text' className='form-control' id='category' placeholder='category (quote, joke, etc)' ref='category' />
          </div>

          <div className='form-group'>
            <label forHtml='tags'>Tags</label>
            <input type='text' className='form-control' id='tags' placeholder='tags (comma separated)' ref='tags' />
          </div>

          <input type='submit' value='Create quote' className='btn btn-primary' />

        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps)(QuotesNew)
