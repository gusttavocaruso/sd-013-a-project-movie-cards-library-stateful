import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="input-text" data-testid="text-input-label">
          Inclui o texto:
          <input type="text" value={ searchText } id="input-text" />
        </label>
      </form>
    );
  }
}

export default SearchBar;
