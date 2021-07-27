import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange
    } = this.props;

    return (
      <form data-testid="search-bar-form">

        <label htmlFor="search-bar" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            data-testid="text-input"
            id="search-bar"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label>

        <label htmlFor="search-checked" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            id="search-checked"
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            data-testid="checkbox-input"
          />
        </label>

      </form>
    );
  }
}

export default SearchBar;
