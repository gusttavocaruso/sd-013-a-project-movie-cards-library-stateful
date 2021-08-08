// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  renderTextInput() {
    return (
      <label htmlFor="text-input" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          name=""
          id="text-input"
          value={this.props.searchText}
          onChange={this.props.onSearchTextChange}
          data-testid="text-input"
        />
      </label>
    );
  }

  renderCheckboxInput() {
    return (
      <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
        Mostrar somente favoritos:
        <input
          type="checkbox"
          name="checkbox-input"
          id="checkbox-input"
          checked={this.props.bookmarkedOnly}
          onChange={this.props.onBookmarkedChange}
          data-testid="checkbox-input"
        />
      </label>
    );
  }

  renderSelectInput() {
    return (
      <label htmlFor="select-input" data-testid="select-input-label">
        Filtrar por gênero:
        <select 
          name="select-input"
          id="select-input"
          value={this.props.selectedGenre}
          onChange={this.props.onSelectedGenreChange}
          data-testid="select-input"
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  };

  render() {
    return (
      <form data-testid="search-bar-form">
        {this.renderTextInput()}
        {this.renderCheckboxInput()}
        {this.renderSelectInput()}
      </form>
    );
  }
}

export default SearchBar;
