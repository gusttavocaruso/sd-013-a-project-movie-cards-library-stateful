import React from 'react';
import PropTypes from 'prop-types';
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
        <label htmlFor="textSearch" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="textSearch"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>

        <label htmlFor="favorites" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            id="favorites"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
      </form>
    );
  };
}
SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  searchText: '',
  bookmarkedOnly: false,
  selectedGenre: '',
};

export default SearchBar;
