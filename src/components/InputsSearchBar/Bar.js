import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Bar extends Component {
  render () {
    const { searchText, onSearchTextChange } = this.props

    return (
      <div>
        <label htmlFor='search-text' data-testid='text-input-label'>
          Inclui o texto:
          <input
            type='text'
            name='search-text'
            id='search-text'
            value={searchText}
            onChange={onSearchTextChange}
            data-testid='text-input'
          />
        </label>
      </div>
    )
  }
}

Bar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired
}
