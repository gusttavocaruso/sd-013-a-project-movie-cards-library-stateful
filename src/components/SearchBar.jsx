/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

// implement SearchBar component here
import React from 'react';
// import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { data: {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } } = this.props;

    console.log(searchText);
    return (
      <form action="#" data-testid="search-bar-form">
        <label htmlFor="search" data-testid="text-input-label">
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
        <label htmlFor="bookmarked" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="bookmarked"
            id="bookmarked"
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
      </form>
    );
  }
}

// SearchBar.propTypes = { SearchBar: PropTypes.number };

SearchBar.defaultProps = {
  SearchBar: 'undefined',
};

export default SearchBar;
