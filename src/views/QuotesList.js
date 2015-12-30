import React from 'react'
import 'styles/core.scss'
import { Link } from 'react-router'
import { actions as quoteActions } from '../redux/modules/getquotes'
import { connect } from 'react-redux'
import _ from 'lodash'
import styles from '../styles/QuotesListStyles.scss'
import QuoteTile from '../components/quote-tile'

const mapStateToProps = (state) => ({
  quotes: state.quotes
})

export class QuotesList extends React.Component {

  static propTypes = {
    quotes: React.PropTypes.object,
    fetch: React.PropTypes.func,
    getQuotes: React.PropTypes.func
  }

  componentDidMount () {
    this.props.getQuotes()
    console.log(this.props)
  }

  render () {
    return (
      <div>
        <ul className={styles['quotes-list']}>
          {_.map(this.props.quotes, function (val, key) {
            return <QuoteTile quote={val} key={key} id={key} />
          })}
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, quoteActions)(QuotesList)
