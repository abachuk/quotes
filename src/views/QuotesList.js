import React from 'react'
import 'styles/core.scss'
import Firebase from 'firebase'
import constants from 'utils/constants'
import { Link } from 'react-router'

const ref = new Firebase(constants.FIREBASE + '/quotes')
ref.on('value', function (snapshot) {
  let quotes = snapshot.val()
}, function (errorObject) {
  console.log('The read failed: ' + errorObject.code)
})

export class QuotesList extends React.Component {

  render () {
    return (
      <div>
        <ul>
          {this.props.quotes.map.map(function (quote) {
            return <li key={quote}>quote.text</li>
          })}
        </ul>
      </div>
    )
  }
}

export default QuotesList
