import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto:
          <input type="text" value={searchText} onChange='' data-testid="text-input" />
        </label>
        <label htmlFor="checkbox-input">
          Mostrar somente favoritos
          <input type="checkbox" checked={bookmarkedOnly} onChange={ } data-testid="checkbox-input" />
        </label>
      </form>
    );
  }
}
export default SearchBar;