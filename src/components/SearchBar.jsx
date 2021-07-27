import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <form data-testid="search-bar-form">
          <label htmlFor="searchText" data-testid="text-input-label">
            Inclui o texto
            <input type="text" name="searchText" data-testid="text-input" />
          </label>
          <label htmlFor="favCheckBox" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input type="checkbox" name="favCheckBox" data-testid="checkbox-input" />
          </label>
          <label htmlFor="selectGender" data-testid="select-input-label">
            Filtrar por gênero
            <select name="selectGender" data-testid="select-input">
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
