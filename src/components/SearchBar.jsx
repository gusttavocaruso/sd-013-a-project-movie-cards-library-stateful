import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, bookmarkedOnly, selectedGenre, onSearchTextChange,
      onBookmarkedChange, onSelectedGenreChange } = this.props;
    return (
      <form action="" data-testid="search-bar-form">
        <label htmlFor="busca" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            id="busca"
            name="busca"
            value={ searchText }
            bookmarkedOnly={ bookmarkedOnly }
            selectedGenre={ selectedGenre }
            onChange={ onSearchTextChange }
            onBookmarkedChange={ onBookmarkedChange }
            onSelectedGenreChange={ onSelectedGenreChange }
            data-testid="text-input"
          />
        </label>
        <label htmlFor="marked" data-testid="checkbox-input-label">
          <input
            id="marked"
            name="marked"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
          Mostrar somente favoritos
        </label>
        {/* <label htmlFor="genero" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name="genero"
            id="genero"
            aria-label="Filtrar por gênero"
            value={ this.state.selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
          />
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label> */}
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
