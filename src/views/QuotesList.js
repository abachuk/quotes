import React from 'react'
import 'styles/core.scss'
import { Link } from 'react-router'
import { actions as quoteActions } from '../redux/modules/getquotes'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  quotes: state.quotes
})

// {this.props.quotes.map.map(function (quote) {
//   return <li key={quote}>quote.text</li>
// })}
export class QuotesList extends React.Component {

  static propTypes = {
    quotes: React.PropTypes.object,
    fetch: React.PropTypes.func
  }

  componentDidMount () {
    this.props.getQuotes()
    console.log(this.props)
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  render () {
    return (
      <div>
        <ul>
          <li>Yo</li>
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, quoteActions)(QuotesList)
