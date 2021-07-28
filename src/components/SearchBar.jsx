import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="input-text" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            id="input-text"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
            placeholder="Pesquisar filme..."
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

// SearchBar.defaultProps = {
//   // searchText: '',
//   // onSearchTextChange: () => {},
// };

export default SearchBar;
