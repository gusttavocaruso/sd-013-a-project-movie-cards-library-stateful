import React from 'react';
import PropTypes from 'prop-types';

class SearchText extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;

    return (
      <label htmlFor="search-bar" data-testid="text-input-label">
        Inclui o texto:
        <input
          name="searchText"
          type="text"
          data-testid="text-input"
          id="search-bar"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }
}

SearchText.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
};

SearchText.defaultProps = {
  searchText: '',
  onSearchTextChange: undefined,
};

export default SearchText;
