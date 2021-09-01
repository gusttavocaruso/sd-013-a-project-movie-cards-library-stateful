// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.renderSearchBarInput = this.renderSearchBarInput.bind(this);
    this.renderBookmarkedInput = this.renderBookmarkedInput.bind(this);
    this.renderGenreInput = this.renderGenreInput.bind(this);
  }

  renderSearchBarInput() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label
        htmlFor="search-bar"
        data-testid="text-input-label"
      >
        Inclui o texto:
        <input
          type="text"
          name="search-bar"
          id="search-bar"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </label>
    );
  }

  renderBookmarkedInput() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label
        htmlFor="bookmarked-movies-checkbox"
        data-testid="checkbox-input-label"
      >
        Mostrar somente favoritos:
        <input
          type="checkbox"
          name="bookmarked-movies"
          id="bookmarked-movies-checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }

  renderGenreInput() {
    const { selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <label
        htmlFor="genre-select"
        data-testid="select-input-label"
      >
        Filtrar por gênero:
        <select
          name="genres"
          id="genre-select"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          data-testid="select-input"
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        {this.renderSearchBarInput()}
        {this.renderBookmarkedInput()}
        {this.renderGenreInput()}
      </form>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
