import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <section>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="inclui_texto">
            Inclui o texto
            <input
              data-testid="text-input"
              type="text"
              id="inclui_texto"
              onChange="this.props.onSearchTextChanges"
              value="this.props.searchText"
            />
          </label>
          <label data-testid="checkbox-input-label" htmlFor="mostra_favorito">
            Mostrar somente favoritos
            <input
              data-testid="checkbox-input"
              id="mostra_favorito"
              type="checkbox"
              checked="this.props.bookmarkedOnly"
              onChange="this.props.onBookmarkedChange"
            />
          </label>
          <label data-testid="select-input-label">
            Filtrar por gênero
            <select
              data-testid="select-input"
              value="this.props.selectedGenre"
              onChange="this.prop.onSelectedGenreChange"
            >
              <option
                data-testid="select-option"
                value=""
              >
                Todos
              </option>
              <option
                data-testid="select-option"
                value="action"
              >
                Ação
              </option>
              <option
                data-testid="select-option"
                value="comedy"
              >
                Comédia
              </option>
              <option
                data-testid="select-option"
                value="thriller"
              >
                Suspense
              </option>
            </select>
          </label>
        </form>
      </section>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.callback,
  bookmarkedOnly: PropTypes.boolean,
  onBookmarkedChange: PropTypes.callback,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.callback,
};

export default SearchBar;
