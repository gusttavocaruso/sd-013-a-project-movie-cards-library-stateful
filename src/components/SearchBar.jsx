// implement SearchBar component here

import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     searchText: '',
  //   }
  // }

  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      // searchText={ props.searchText } -> searchText="uma string" -> const { searchText }=this.props
      // onSearchTextChange={ props.onSearchTextChange }
      // bookmarkedOnly={ props.bookmarkedOnly }
      // onBookmarkedChange={ props.onBookmarkedChange }
      // selectedGenre={ props.selectedGenre }
      // onSelectedGenreChange={ props.onSelectedGenreChange }
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="input">
          Inclui o texto:
          <input
            type="text"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchBar;
