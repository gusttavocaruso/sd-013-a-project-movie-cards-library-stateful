import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      SearchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      onSelectedGenreChange,
    } = this.props;

    return (
      <div>
        <form action="" data-testid="search-bar-form">

          <label htmlFor="search-input" data-testid="text-input-label">
            Inclui o texto:
            <input
              id="search-input"
              data-testid="text-input"
              type="text"
              value={ SearchText }
              onChange={ onSearchTextChange }
            />
          </label>

          <label htmlFor="search-checkbox" data-testid="checkbox-input-label">
            Mostrar somente favoritos:
            <input
              id="search-checkbox"
              data-testid="checkbox-input"
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>

        </form>
      </div>
    );
  }
}

export default SearchBar;
