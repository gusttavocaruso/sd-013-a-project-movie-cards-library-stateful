import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="searchInput">
          <input
            type="text"
            name="searchInput"
            data-testid="text-input"
            searchText=""
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
