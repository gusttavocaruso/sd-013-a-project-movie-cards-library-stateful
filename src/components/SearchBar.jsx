// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label
          htmlFor="search-bar"
          data-testid="text-input-label"
        >
          Inclui o texto:
          <input
            type="text"
            name="search-bar"
            id="search-bar"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        
        <label 
          htmlFor="bookmarked-movies-checkbox"
          data-testid="checkbox-input-label"
        >
          Mostrar somente favoritos:
          <input
            type="checkbox"
            name="bookmarked-movies"
            id="bookmarked-movies-checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>

      </form>
    );
  }
}

export default SearchBar;
