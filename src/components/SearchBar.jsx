import React from 'react';
import PropTypes from 'prop-types';
/* ---- label associada com o input com a  ajuda do https://stackoverflow.com/questions/54446655/eslint-rule-for-label ---- */
class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="search-bar" data-testid="text-input-label">
            Inclui o texto:
            <input
              data-testid="text-input"
              type="text"
              id="search-bar"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
            <label htmlFor="bookmark-checkbox" data-testid="checkbox-input-label">
              Mostrar somente favoritos
              <input
                data-testid="checkbox-input"
                type="checkbox"
                id="bookmark-checkbox"
                checked={ bookmarkedOnly }
                onChange={ onBookmarkedChange }
              />
            </label>
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  searchText: '',
  bookmarkedOnly: false,

};

export default SearchBar;
