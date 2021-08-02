import React from 'react';
import PropTypes from 'prop-types';

class SearchInput extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <fieldset>
        <label htmlFor="searchText" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            name="searchText"
            className="search-box"
            id="searchText"
            placeholder="Pesquise aqui!"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
      </fieldset>
    );
  }
}

SearchInput.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchInput;
