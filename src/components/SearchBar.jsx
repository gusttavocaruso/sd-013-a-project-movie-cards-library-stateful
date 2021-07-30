import propTypes from 'prop-types';
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="Text">
          Inclui o texto
          <input
            type="text"
            name="searchText"
            data-testid="text-input"
            value={ searchText }
            onChange={ (e) => onSearchTextChange(e) }
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="bookmarked">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="bookmarked"
            checked={ bookmarkedOnly }
            onChange={ () => onBookmarkedChange() }
            data-testid="checkbox-input"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="Genres">
          Filtrar por gênero
          <select
            data-testid="select-input"
            value={ selectedGenre }
            onChange={ (e) => onSelectedGenreChange(e) }
            name="Genres"
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
  searchText: propTypes.string.isRequired,
  onSearchTextChange: propTypes.func.isRequired,
  bookmarkedOnly: propTypes.bool.isRequired,
  onBookmarkedChange: propTypes.func.isRequired,
  selectedGenre: propTypes.string.isRequired,
  onSelectedGenreChange: propTypes.func.isRequired,
};

export default SearchBar;
