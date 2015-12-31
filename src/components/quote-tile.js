import React from 'react'
import styles from '../styles/QuotesListStyles.scss'
import Firebase from 'firebase'
import constants from 'utils/constants'
import { Link } from 'react-router'

const ref = new Firebase(constants.FIREBASE)

export class QuoteTile extends React.Component {

  static propTypes = {
    quote: React.PropTypes.object,
    id: React.PropTypes.string
  }

  viewItem (e) {
    console.log('view')
  }

  editItem (e) {
    console.log(this.props)
  }

  deleteItem (e) {
    let quote = ref.child('quotes/' + this.props.id)
    if (window.confirm('Do you really want to delete this?')) {
      quote.remove()
    }
  }

  render () {
    return (
      <li className={styles['quotes-tile']}>

        <div className={styles['quotes-body']}>
          {this.props.quote.text}
        </div>

        <footer className={styles['quotes-footer']}>
          <Link to={`/quotes/${this.props.id}`}>View</Link>
          <a href='#' onClick={this.editItem.bind(this)}>Edit</a>
          <a href='#' onClick={this.deleteItem.bind(this)}>Delete</a>
        </footer>

      </li>
    )
  }
}

export default QuoteTile
