import React from 'react';
import PropType from 'prop-types';
import IncluiTexto from './IncluiTexto';
import ShowFavorites from './ShowFavorites';
import ForGender from './ForGender';

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
      <form data-testid="search-bar-form">
        <IncluiTexto
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
        />
        <ShowFavorites
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
        />
        <ForGender
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropType.string,
  onSearchTextChange: PropType.func,
  bookmarkedOnly: PropType.bool,
  onBookmarkedChange: PropType.func,
  selectedGenre: PropType.string,
  onSelectedGenreChange: PropType.func,
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: {},
  bookmarkedOnly: false,
  onBookmarkedChange: {},
  selectedGenre: '',
  onSelectedGenreChange: {},
};

export default SearchBar;
