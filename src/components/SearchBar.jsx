import React from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';
import InputCheckbox from './InputCheckbox';
import Select from './Select';

class SearchBar extends React.Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">

        <InputText
          searchTextKey={ searchText }
          onSearchTextChangeKey={ onSearchTextChange }
        />

        <InputCheckbox
          bookmarkedOnlyKey={ bookmarkedOnly }
          onBookmarkedChangeKey={ onBookmarkedChange }
        />

        <Select
          selectedGenreKey={ selectedGenre }
          onSelectedGenreChangeKey={ onSelectedGenreChange }
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
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: false,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: '',
  onSelectedGenreChange: PropTypes.func,
};

export default SearchBar;
