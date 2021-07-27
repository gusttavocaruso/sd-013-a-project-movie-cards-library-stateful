import React from 'react';
import propTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label
          htmlFor="SearchBar"
          data-testid="text-input-label"
        >
          Inclui o texto:
          <input
            value={ searchText }
            onChange={ onSearchTextChange }
            type="text"
            name="SearchBar"
            data-testid="text-input"
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: propTypes.string.isRequired,
  onSearchTextChange: propTypes.func.isRequired,
};

export default SearchBar;
