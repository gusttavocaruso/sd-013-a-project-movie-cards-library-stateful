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
    const {
      searchText,
      onSearchTextChange,
      bookmarkedonly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
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
        <label data-testid="checkbox-input-label" htmlFor="checkbox">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={ bookmarkedonly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <label data-testid="select-input-label" htmlFor="select">
          <select
            data-testid="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  bookmarkedonly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
