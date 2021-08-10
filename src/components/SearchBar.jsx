// Criando componente SearchBar
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  // Definindo recebimento das props
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    // Renderização dos elementos
    return ( // Renderizando a forms dentro do componente
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="searchText">
          Inclui o texto:
          <input // Renderizando um input do tipo texto dentro do componente
            type="text"
            name="searchText"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="checkbox">
          Mostrar somente favoritos
          <input // Renderizando um input do tipo checkbox dentro do componente
            type="checkbox"
            name="bookmarkedOnly"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="selectedGenre">
          Filtrar por gênero
          <select // Renderizando um select dentro do componente
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
