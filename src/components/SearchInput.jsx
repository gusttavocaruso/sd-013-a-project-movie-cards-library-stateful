import React from 'react';
import PropTypes from 'prop-types';

class SearchInput extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="search" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          id="search"
          name="search"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }
}

SearchInput.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchInput;
