// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <div>
        <form action="" data-testid="search-bar-form"> </form>
        <label htmlFor="input" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            id="input"
            data-testid="text-input"
            onChange={ onSearchTextChange }
            value={ searchText }
          />
        </label>
        {bookmarkedOnly}
        {onBookmarkedChange}
        {selectedGenre}
        {onSelectedGenreChange}
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
