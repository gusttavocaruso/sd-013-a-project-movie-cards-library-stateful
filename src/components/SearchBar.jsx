import React from 'react';
import PropTypes from 'prop-types';
import InputText from './new-components/InputText';
import InputCheckbox from './new-components/InputCheckbox';
import InputSelect from './new-components/InputSelect';

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

        <InputSelect
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
