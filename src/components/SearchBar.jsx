import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  preventOnSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;

    const { preventOnSubmit } = this;

    return (
      <form data-testid="search-bar-form" onSubmit={ preventOnSubmit }>
        <label data-testid="text-input-label" htmlFor="searchText">
          Inclui o texto
          <input
            data-testid="text-input"
            value={ searchText }
            id="searchText"
            onChange={ onSearchTextChange }
            type="text"
          />
        </label>

        <label data-testid="checkbox-input-label" htmlFor="bookmarkedOnly">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            type="checkbox"
            name="favorites"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            id="bookmarkedOnly"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="selectedGenre">
          Filtrar por gênero
          <select
            name="genre"
            id="selectedGenre"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
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
