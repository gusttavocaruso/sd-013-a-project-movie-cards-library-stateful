import React from 'react';
import PropTypes from 'prop-types';

class IncluiTexto extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;

    return (
      <label data-testid="text-input-label" htmlFor="inputLabel">
        Inclui o texto:
        <input
          data-testid="text-input"
          id="inputLabel"
          type="text"
          name="searchText"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }
}

IncluiTexto.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
};

IncluiTexto.defaultProps = {
  searchText: '',
  onSearchTextChange: [],
};

export default IncluiTexto;
