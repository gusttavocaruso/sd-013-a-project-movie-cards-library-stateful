// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  // eslint-disable-next-line max-lines-per-function
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, 
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label
            data-testid="text-input-label"
            onChange={ onSearchTextChange }
            htmlFor="input-filter"
          >
            Inclui o texto
            <input
              data-testid="text-input"
              type="text"
              id="input-filter"
              value={ searchText }
            />
          </label>
          <label data-testid="checkbox-input-label" htmlFor="checkbox">
            Mostrar somente favoritos
            <input
              type="checkbox"
              data-testid="checkbox-input"
              id="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>
          <label data-testid="select-input-label" htmlFor="select-form">
            Filtrar por gênero
            <select
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
              name=""
              id="select-form"
              data-testid="select-input"
            >
              <option
                data-testid="select-option"
                name="todos"
                id="todos"
                value=""
              >
                Todos
              </option>

              <option
                data-testid="select-option"
                name="acao"
                id="acao"
                value="action"
              >
                Ação
              </option>

              <option
                name="comedy"
                data-testid="select-option"
                id="comedy"
                value="comedy"
              >
                Comédia
              </option>

              <option
                name="suspense"
                data-testid="select-option"
                id="suspense"
                value="thriller"
              >
                Suspense
              </option>

            </select>
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

export default SearchBar;
