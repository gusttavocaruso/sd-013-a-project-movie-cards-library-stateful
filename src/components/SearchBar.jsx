import React from 'react';
import PropTypes from 'prop-types';
/* ---- label associada com o input com a  ajuda do https://stackoverflow.com/questions/54446655/eslint-rule-for-label ---- */
class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
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
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  searchText: '',
};

export default SearchBar;
