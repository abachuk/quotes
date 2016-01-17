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
    console.log(this.props)

    var bgImage = {
        backgroundImage: 'url('+this.props.quote.image+')'
    }

    return (
      <li className={styles['quotes-tile']} style={bgImage}>

        <div className={styles['quotes-body']}>
          {this.props.quote.text}
        </div>

        <footer className={styles['quotes-footer']}>
          <Link to={`/quotes/view/${this.props.id}`}>View</Link>
          <Link to={`/quotes/edit/${this.props.id}`}>Edit</Link>
          <a href='#' onClick={this.deleteItem.bind(this)}>Delete</a>
        </footer>

      </li>
    )
  }
}

export default QuoteTile
