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
      onSelectedGenreChange
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        {/* Req. 3 */}
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
      </form>
    );
  }
}

export default SearchBar;
