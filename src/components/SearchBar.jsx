import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange } = this.props;

    return (
      <form className="form" data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text-input">
          Inclui o texto:
          <input
            type="text"
            name="name"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>

        <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
          <input
            type="checkbox"
            name="Filmes favoritos"
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
          Mostrar somente favoritos
        </label>

        <label htmlFor="select-input" data-testid="select-input-label">
          Filtrar por gênero
          <select
            onChange={ onSelectedGenreChange }
            value={ selectedGenre }
            data-testid="select-input"
          >
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comedia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}
SearchBar.propTypes = {
  searchText: PropTypes.string,
  bookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
  onBookmarkedChange: PropTypes.func,
  onSearchTextChange: PropTypes.func,
}.isRequired;
export default SearchBar;
