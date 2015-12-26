import React from 'react'
import 'styles/core.scss'

export class QuotesNew extends React.Component {

  addOne (e) {
    e.preventDefault()
    console.log(this)
  }

  handleFile (e) {
    const self = this
    let reader = new FileReader()
    let file = e.target.files[0]
    reader.onload = function (upload) {
      self.setState({
        data_uri: upload.target.result
      })
    }

    reader.readAsDataURL(file)
  }

  handleSubmit (e) {
    e.preventDefault()
    console.log(this)
    let title = this.refs.title.value
    console.log(title)
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


          <input type='submit' value='Create quote' className='btn btn-primary' />

        </form>
      </div>
    )
  }
}

export default QuotesNew
