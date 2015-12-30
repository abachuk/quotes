import React from 'react'
import styles from '../styles/QuotesListStyles.scss'

export class QuoteTile extends React.Component {

  static propTypes = {
    quote: React.PropTypes.object,
    id: React.PropTypes.string
  }

  viewItem (e) {
    console.log('view')
  }

  editItem (e) {
    console.log('edit')
  }

  deleteItem (e) {
    console.log('delete')
    console.log(this)
  }

  render () {
    return (
      <li className={styles['quotes-tile']}>
        {this.props.quote.text}
        <a href='#' onClick={this.viewItem.bind(this)}>View</a>
        <a href='#' onClick={this.editItem.bind(this)}>Edit</a>
        <a href='#' onClick={this.deleteItem.bind(this)}>Delete</a>
      </li>
    )
  }
}

export default QuoteTile
