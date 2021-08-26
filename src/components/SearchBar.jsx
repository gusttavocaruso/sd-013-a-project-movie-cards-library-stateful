import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      procurar,
      marcador,
      selecionar,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="searchText" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            id="searchText"
            value={ procurar }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            id="bookmarkedOnly"
            checked={ marcador }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
        <label htmlFor="selectedGenre" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="selectedGenre"
            value={ selecionar }
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
  procurar: PropTypes.string,
  onSearchTextChange: PropTypes.func.isRequired,
  marcador: PropTypes.bool,
  onBookmarkedChange: PropTypes.func.isRequired,
  selecionar: PropTypes.string,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  procurar: '',
  marcador: false,
  selecionar: '',
};

export default SearchBar;
