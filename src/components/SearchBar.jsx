import React from 'react';
import PropTypes from 'prop-types';
import TextAdd from './TextAdd';
import FavoriteOnly from './FavoriteOnly';
import FilterByGenre from './FilterByGenre';

class SearchBar extends React.Component {
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
      <form
        data-testid="search-bar-form"
      >
        <TextAdd
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
        />
        <FavoriteOnly
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
        />
        <FilterByGenre
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: [],
  bookmarkedOnly: false,
  onBookmarkedChange: [],
  selectedGenre: '',
  onSelectedGenreChange: [],
};

export default SearchBar;
