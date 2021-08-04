import React from 'react';
import PropTypes from 'prop-types';

class TextAdd extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;

    return (
      <label
        htmlFor="includes-text"
        data-testid="text-input-label"
      >
        Inclui o texto:
        <input
          type="text"
          id="includes-text"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </label>
    );
  }
}

TextAdd.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
};

TextAdd.defaultProps = {
  searchText: '',
  onSearchTextChange: [],
};

export default TextAdd;
