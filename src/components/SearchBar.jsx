import React from 'react';
import PropTypes from 'prop-types';
import SelectForm from './SearchBarSelect';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label
          data-testid="text-input-label"
          htmlFor={ searchText }
        >
          Inclui o texto:
          <input
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
            id={ searchText }
            name="searchText"
          />
        </label>
        <label
          data-testid="checkbox-input-label"
          htmlFor="inputCheck"
        >
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
            id="inputCheck"
            name="bookmarkedOnly"
          />
        </label>
        <SelectForm
          onSelectedGenreChange={ onSelectedGenreChange }
          selectedGenre={ selectedGenre }
        />
      </form>
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
