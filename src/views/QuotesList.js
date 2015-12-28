import React from 'react'
import 'styles/core.scss'
import { Link } from 'react-router'
import { actions as quoteActions } from '../redux/modules/getquotes'
import { connect } from 'react-redux'
import _ from 'lodash'

const mapStateToProps = (state) => ({
  quotes: state.quotes
})

// {this.props.quotes.map.map(function (quote) {
//   return <li key={quote}>quote.text</li>
// })}
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
        <ul>
          {_.map(this.props.quotes, function(val, key) {
            return <li key={key}>{val.text}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, quoteActions)(QuotesList)
