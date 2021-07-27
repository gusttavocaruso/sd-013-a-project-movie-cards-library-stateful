import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;

    return (
      <form>
        <label htmlFor="search-bar" data-testid="text-input-label">
          Inclui o texto:
          <input
            data-testid="text-input"
            id="search-bar"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
