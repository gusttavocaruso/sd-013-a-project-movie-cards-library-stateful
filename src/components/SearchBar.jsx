// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form" action=""> // Requisito 2
        <label data-testid="text-input-label" htmlFor="text-input"> // Requisito 3
          Inclui o texto:
          <imput data-testid="text-input" type="text" value={ searchText } onChange={ onSearchTextChange } />
        </label>

        <label data-testid="checkbox-input-label" htmlFor="checkbox-input" > // Requisito 4
          Mostrar somente favoritos
          <imput data-testid="checkbox-input" type="checkbox" checked={ bookmarkedOnly } onChange={ onBookmarkedChange } />
        </label>

        <label data-testid="select-input-label" > // Requisito 5
          Filtrar por gênero
          <select data-testid="select-input" value={ selectedGenre } OnChange= { onSelectedGenreChange } >
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
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

export default SearchBar;