import React from 'react';
import PropTypes from 'prop-types';

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
        <div>
          <label data-testid="text-input-label" htmlFor="txt-ipt">
            Inclui o texto:
            <input
              data-testid="text-input"
              id="txt-ipt"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
        </div>
        <div>
          <label data-testid="checkbox-input-label" htmlFor="chkbx-ipt">
            Mostrar somente favoritos
            <input
              data-testid="checkbox-input"
              id="chkbx-ipt"
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>
        </div>
        <div>
          <label data-testid="select-input-label" htmlFor="slct-ipt">
            Filtrar por gênero
            <select
              data-testid="select-input"
              id="slct-ipt"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
            >
              <option data-testid="select-option" value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="comedy">Comédia</option>
              <option data-testid="select-option" value="thriller">Suspense</option>
            </select>
          </label>
        </div>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
