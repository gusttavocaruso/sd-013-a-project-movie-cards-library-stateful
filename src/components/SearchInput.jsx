import React from 'react';
import PropTypes from 'prop-types';

class SearchInput extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <div>
        <label htmlFor="search" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            name="search"
            id="search"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label
          htmlFor="favorites"
          data-testid="checkbox-input-label"
        >
          Mostrar somente favoritos
          <input
          type="checkbox"
          name="favorites"
          id="favorites"
            // checked={ bookmarkedOnly }
            // onChange={ onBookmarkedChange }
          />
        </label>
      </div>
    );
  }
}

SearchInput.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchInput;
