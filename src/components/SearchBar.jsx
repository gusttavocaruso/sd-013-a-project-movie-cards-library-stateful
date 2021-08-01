// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange } = this.props;
    return (

      <form data-testid="search-bar-form">
        <label htmlFor=" seach-text" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="seach-text"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label htmlFor="seach-checkbox" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            id="seach-checkbox"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
//   searchText: PropTypes.string,
//   onSearchTextChange: Proptypes.function,
//   bookmarkedOnly: PropTypes.boll,
//   onBookmarkedChange: PropTypes.function,
//   selectedGenre: PropTypes.string,
//   onSelectedGenreChange: PropTypes.function,
}.isRequired;

export default SearchBar;
