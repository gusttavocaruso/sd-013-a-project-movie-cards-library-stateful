import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="" data-testid="text-input-label">
          Inclui o texto:
          <input />
        </label>
      </form>
    );
  }
}

export default SearchBar;
