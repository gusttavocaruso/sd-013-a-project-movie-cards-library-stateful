import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChang,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label
          data-testid="text-input-label"
          htmlFor="input-label"
        >
          Inclui o texto:
          <input
            type="text"
            id="input-label"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChang }
          />
        </label>
        <label
          data-testid="checkbox-input-label"
          htmlFor="checkbox-label"
        >
          Mostrar somente favoritos
          <input
            type="checkbox"
            data-testid="checkbox-input"
            id="checkbox-label"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <label
          htmlFor="genre-options"
          data-testid="select-input-label"
        >
          Filtrar por gênero
          <select
            data-testid="select-input"
            id="genre-options"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="Action">Ação</option>
            <option data-testid="select-option" value="Comedy">Comédia</option>
            <option data-testid="select-option" value="Suspense">Thriller</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChang: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  searchText: '',
  bookmarkedOnly: false,
  selectedGenre: '',
};

export default SearchBar;
