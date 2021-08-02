import React from 'react';
import PropTypes from 'prop-types';
import SelectGenre from './SelectGenre';

class SearchBar extends React.Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form" className="form">
        <label
          htmlFor={ searchText }
          data-testid="text-input-label"
          className="label-form"
        >
          Inclui o texto
          <input
            name="searchText"
            className="inputs"
            id={ searchText }
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <div>
          <label
            htmlFor="input-checkbox"
            data-testid="checkbox-input-label"
            className="label-form"
          >
            Mostrar somente favoritos
            <input
              name="bookmarkedOnly"
              id="input-checkbox"
              type="checkbox"
              className="input-checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
            />
          </label>
        </div>
        <SelectGenre
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
