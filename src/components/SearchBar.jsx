/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

// implement SearchBar component here
import React from 'react';
// import PropTypes from 'prop-types';

// {
//   searchText,
//   onSearchTextChange,
//   bookmarkedOnly,
//   onBookmarkedChange,
//   selectedGenre,
//   onSelectedGenreChange,
// }
class SearchBar extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);

    return (
      <form action="#" data-testid="search-bar-form">
        <label htmlFor="search" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            name="search"
            id="search"
            data-testid="text-input"
            value={ data.searchText }
            onChange={ data.onSearchTextChange }
          />
        </label>
        <label htmlFor="bookmarked" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="bookmarked"
            id="bookmarked"
            data-testid="checkbox-input"
            checked={ data.bookmarkedOnly }
            onChange={ data.onBookmarkedChange }
          />
        </label>
        <label htmlFor="genre" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name="genre"
            id="genre"
            onChange={ data.selectedGenre }
            data-testid="select-input"
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

// SearchBar.propTypes = { SearchBar: PropTypes.number };

SearchBar.defaultProps = {
  SearchBar: 'undefined',
};

export default SearchBar;
