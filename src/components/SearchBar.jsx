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
        <label htmlFor="check" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name=""
            id="check"
            onChange={ onBookmarkedChange }
            checked={ bookmarkedOnly }
            data-testid="checkbox-input"
          />
        </label>
        <label htmlFor="select" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name=" "
            id="select"
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
