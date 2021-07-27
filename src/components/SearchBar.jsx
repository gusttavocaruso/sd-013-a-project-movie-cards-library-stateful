import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../SearchBar.css';

class SearchBar extends Component {
  constructor() {
    super();

    this.renderTextInput = this.renderTextInput.bind(this);
    this.renderCheckBox = this.renderCheckBox.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
  }

  renderTextInput() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="searchText" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          name="searchText"
          id="searchText"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </label>
    );
  }

  renderCheckBox() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
        Mostrar somente favoritos
        <input
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          id="bookmarkedOnly"
          name="bookmarkedOnly"
          data-testid="checkbox-input"
        />
      </label>
    );
  }

  renderSelect() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label data-testid="select-input-label" htmlFor="select-input">
        Filtrar por gênero
        <select
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          id="selectedGenre"
          name="selectedGenre"
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
      <form action="" data-testid="search-bar-form">
        { this.renderTextInput() }
        { this.renderCheckBox() }
        { this.renderSelect() }
      </form>
    );
  }
}
