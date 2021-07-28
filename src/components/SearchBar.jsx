import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor() {
    super();
    this.generateInput = this.generateInput.bind(this);
    this.generateCheckBox = this.generateCheckBox.bind(this);
    this.generateSelect = this.generateSelect.bind(this);
  }

  generateInput() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="textInput" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          name="textInput"
          id="textInput"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </label>
    );
  }

  generateCheckBox() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label htmlFor="checkboxInput" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          type="checkbox"
          name="checkboxInput"
          id="checkboxInput"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }

  generateSelect() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="selectInput" data-testid="select-input-label">
        Filtrar por gênero
        <select
          name="selectInput"
          id="selectInput"
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
    );
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        {this.generateInput()}
        {this.generateCheckBox()}
        {this.generateSelect()}
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
