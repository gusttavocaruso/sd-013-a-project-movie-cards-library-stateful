// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="textInput" data-testid="text-input-label">
            Inclui o texto:
            <input
              type="text"
              data-testid="text-input"
              id="textInput"
              name="textInput"
              onChange={ onSearchTextChange }
              value={ searchText }
            />
          </label>
          <label htmlFor="checkboxInput" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              type="checkbox"
              data-testid="checkbox-input"
              id="checkboxInput"
              name="checkboxInput"
            />
          </label>
          <label htmlFor="selectInput" data-testid="select-input-label">
            Filtrar por gênero
            <select name="selectInput" id="selectInput" data-testid="select-input">
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
