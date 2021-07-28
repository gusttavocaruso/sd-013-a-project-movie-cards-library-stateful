// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';
import IncludesText from './searchBarComponents/IncludesText';
import OnlyFavorites from './searchBarComponents/OnlyFavorites';
import FilterToGender from './searchBarComponents/FilterToGender';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <IncludesText value={ searchText } onChange={ onSearchTextChange } />
          <OnlyFavorites value={ bookmarkedOnly } onChange={ onBookmarkedChange } />
          <FilterToGender value={ selectedGenre } onChange={ onSelectedGenreChange } />
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
  onBookmarkedChange: '',
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: '',
  bookmarkedOnly: false,
  selectedGenre: '',
  onSelectedGenreChange: '',
  onBookmarkedChange: '',
};
export default SearchBar;
