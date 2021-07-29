import React from 'react';
import PropType from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="inputLabel">
          Inclui o texto:
          <input
            data-testid="text-input"
            id="inputLabel"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="checkboxLabel">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            id="checkboxLabel"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <label data-testid="select-input-label" htmlFor="selected">
          Filtrar por gênero
          <select
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
            id="selected"
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
  searchText: PropType.string,
  onSearchTextChange: PropType.func,
  bookmarkedOnly: PropType.bool,
  onBookmarkedChange: PropType.func,
  selectedGenre: PropType.string,
  onSelectedGenreChange: PropType.func,
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: {},
  bookmarkedOnly: false,
  onBookmarkedChange: {},
  selectedGenre: '',
  onSelectedGenreChange: {},
};

export default SearchBar;
