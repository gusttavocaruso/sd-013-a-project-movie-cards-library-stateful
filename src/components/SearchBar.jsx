import React from 'react';
import PropTypes from 'prop-types';

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
        <label htmlFor="input-text-search-bar" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            id="input-text-search-bar"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
            placeholder="Pesquisar filme..." // Sugestão do Marlon Lacerda;
          />
        </label>
        <label htmlFor="input-checkbox-search-bar" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            id="input-checkbox-search-bar"
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <label htmlFor="select-search-bar" data-testid="select-input-label">
          Filtrar por gênero
          <select
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

// SearchBar.defaultProps = {
//   // searchText: '',
//   // onSearchTextChange: () => {},
// };

export default SearchBar;
