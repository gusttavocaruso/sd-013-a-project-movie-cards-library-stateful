import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label
          htmlFor="search"
          data-testid="text-input-label"
        >
          Inclui o texto:
          <input
            type="text"
            name="search"
            id="search"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label
          htmlFor="favorates"
          data-testid="checkbox-input-label"
        >
          Mostrar somente favoritos:
          <input
            type="checkbox"
            name="favorates"
            id="favorates"
            data-testid="text-input"
            value={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
      </form>
    );
  }
}
SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.isRequired,
};

export default SearchBar;
