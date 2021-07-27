// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.changeSearchText = this.changeSearchText.bind(this);
  }

  changeSearchText({ target }) {
    const { onSearchTextChange } = this.props;
    onSearchTextChange(target.value);
  }

  changeBookmarked({ target }) {
    const { onBookmarkedChange } = this.props;
    onBookmarkedChange(target.checked);
  }

  changeSelected({ target }) {
    const { onSelectedGenreChange } = this.props;
    onSelectedGenreChange(target.value);
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="searchText" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            onChange={ this.changeSearchText }
            value={ searchText }
            id="searchText"
            data-testid="text-input"
          />
        </label>
        <label htmlFor="checkboxSearch" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            id="checkboxSearch"
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
            onChange={ this.changeBookmarked }
          />
        </label>
        <label htmlFor="selectSearch" data-testid="select-input-label">
          Filtrar por gênero
          <select
            type="checkbox"
            data-testid="select-input"
            id="selectSearch"
            value={ selectedGenre }
            onChange={ this.changeSelected }
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

export default SearchBar;
