import React from 'react'
import styles from '../styles/QuotesListStyles.scss'

export class QuoteTile extends React.Component {

  static propTypes = {
    key: React.PropTypes.object,
    quote: React.PropTypes.object
  }

  viewItem (e) {

  }

  editItem (e) {

  }

  deleteItem (e) {

  }

  render () {
    return (
      <li className={styles['quotes-tile']} key={this.props.key}>
        {this.props.quote.text}
        <a href='#' onClick={this.viewItem.bind(this)}>View</a>
        <a href='#' onClick={this.editItem.bind(this)}>Edit</a>
        <a href='#' onClick={this.deleteItem.bind(this)}>Delete</a>
      </li>
    )
  }
}

export default QuoteTile
