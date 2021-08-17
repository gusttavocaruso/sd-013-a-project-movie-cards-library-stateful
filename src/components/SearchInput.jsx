import React from 'react';
import PropTypes from 'prop-types';

class SearchInput extends React.Component {
  render() {
    const { searchText, onSearchTextChange,
      onBookmarkedChange,
      bookmarkedOnly,
      selectedGenre,
      onSelectedGenreChange } = this.props;
    return (
      <div>
        <label htmlFor="search" data-testid="text-input-label">
          Inclui o texto:
          <input
            data-testid="text-input"
            type="text"
            name="search"
            id="search"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label
          htmlFor="favorites"
          data-testid="checkbox-input-label"
        >
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            type="checkbox"
            name="favorites"
            id="favorites"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <label htmlFor="zzz" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="zzz"
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
      </div>
    );
  }
}

SearchInput.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

SearchInput.defaultProps = {
  searchText: '',
  bookmarkedOnly: false,
  selectedGenre: '',
};

export default SearchInput;
