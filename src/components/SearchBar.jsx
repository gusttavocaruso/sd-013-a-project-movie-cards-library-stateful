// Filho do MovieLibrary (É um filtro)
// Requisito 1

import React from 'react';
import PropTypes from 'prop-types'; // Bibioteca externa

class SearchBar extends React.Component {
  render() {
    const { searchText,
      bookmarkedOnly,
      selectedGenre,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
    } = this.props;

    return (
      // Requisito 2 - Renderizar um formulário
      <form data-testid="search-bar-form">
        {/* Requisito 3 */}
        <label data-testid="text-input-label" htmlFor="searchText">
          Inclui o texto:
          <input
            type="text"
            name="searchText" // identificação do input para usar em JS
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="checkbox">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="bookmarkedOnly" // identificação do input para usar em JS
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="selectedGenre">
          Filtrar por gênero
          <select
            name="selectedGenre"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
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
