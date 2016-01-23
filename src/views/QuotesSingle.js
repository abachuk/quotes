import React from 'react'
import 'styles/core.scss'
import { connect } from 'react-redux'
import _ from 'lodash'
import styles from '../styles/SingleQuote.scss'
import { actions as quoteActions } from '../redux/modules/quote'

const mapStateToProps = (state) => ({
  quote: state.quote
})

export class QuotesSingle extends React.Component {

  static propTypes = {
    fetch: React.PropTypes.func,
    getQuote: React.PropTypes.func,
    params: React.PropTypes.object
  }

  componentDidMount () {
    this.props.getQuote(this.props.params.id)
    console.log(this.props)
  }

  render () {
    return (
      <div className='col-md-6'>
        Yo
      </div>
    )
  }
}

export default connect(mapStateToProps, quoteActions)(QuotesSingle)
