import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  inputSearch = () => {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label
        htmlFor="search"
        data-testid="text-input-label"
      >
        Inclui o texto:
        <input
          data-testid="text-input"
          type="text"
          name="searchText"
          id="search"
          onChange={ onSearchTextChange }
          value={ searchText }
        />
      </label>
    );
  }

  inputCheckFavorito = () => {
    const { onBookmarkedChange, bookmarkedOnly } = this.props;
    return (
      <label htmlFor="check" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          name="bookmarkedOnly"
          id="check"
          data-testid="checkbox-input"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>
    );
  }

  selectGenre = () => {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="genre" data-testid="select-input-label">
        Filtrar por gênero
        <select
          name="selectedGenre"
          id="genre"
          data-testid="select-input"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <div>
        <form data-testid="search-bar-forma">
          {this.inputSearch()}
          {this.inputCheckFavorito()}
          {this.selectGenre()}
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
