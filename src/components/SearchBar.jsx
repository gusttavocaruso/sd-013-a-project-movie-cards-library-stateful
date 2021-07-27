import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="searchText">
            Inclui o texto:
            <input
              type="text"
              value="searchText"
              data-testid="text-input"
              onChange="onSearchTextChange"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
