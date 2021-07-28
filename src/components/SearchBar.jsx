import React from 'react';

class SearchBar extends React.Component {
  render() {
    // const {
    //   searchText,
    //   onSearchTextChange,
    //   bookmarkedOnly,
    //   onBookmarkedChange,
    //   selectedGenre,
    //   onSelectedGenreChange,
    // } = this.props

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="##" data-testid="text-input-label">
          Inclui o texto:
          <input
            data-testid="text-input"
            type="text"
            // value={ searchText }
            // onChange={ onSearchTextChange }
          />
          <label htmlFor="##" data-testid="checkbox-input-label">
            Mostrar somente favoritos:
            <input
              type="checkbox"
              data-testid="checkbox-input"
              // checked={ bookmarkedOnly }
              // onChange={ onBookmarkedChange }
            />
          </label>
        </label>
      </form>
    );
  }
}

export default SearchBar;
