/* eslint-disable react/prop-types */
// implement SearchBar component here
import React from 'react';
// import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="input-text" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
            id="input-text"
          />
        </label>
        <label htmlFor="checkbox-item" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            id="checkbox-item"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
