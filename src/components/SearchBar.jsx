import React from 'react';
import Proptypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      // selectedGenre,
      // onSelectedGenreChange,
      onBookMarkedChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="searchText">
          Inclui o texto:
          <input
            data-testid="text-input"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>

        <label data-testid="checkbox-input-label" htmlFor="bookmarked">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookMarkedChange }
          />
        </label>

      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: Proptypes.string.isRequired,
  onSearchTextChange: Proptypes.func.isRequired,
  bookmarkedOnly: Proptypes.bool.isRequired,
  onBookMarkedChange: Proptypes.func.isRequired,
};

export default SearchBar;
