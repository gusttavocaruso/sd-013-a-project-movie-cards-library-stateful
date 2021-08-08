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

  render() {
    return (
      <form data-testid="search-bar-form">
        {this.renderTextInput()}
        {this.renderCheckboxInput()}
      </form>
    );
  }
}

export default SearchBar;
