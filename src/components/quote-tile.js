import React from 'react'

export class QuoteTile extends React.Component {

  viewItem (e) {

  }

  editItem (e) {

  }

  deleteItem (e) {

  }

  render () {
    return (
      <li className={styles['quotes-tile']} key={key}>
        {val.text}
        <a href='#' onClick={this.viewItem.bind(this)}>View</a>
        <a href='#' onClick={this.editItem.bind(this)}>Edit</a>
        <a href='#' onClick={this.deleteItem.bind(this)}>Delete</a>
      </li>
    )
  }
}

export default QuoteTile
