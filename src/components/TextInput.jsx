import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;

    return (
      <label htmlFor="text-input" data-testid="text-input-label">
        Inclui o texto:
        <input
          data-testid="text-input"
          name="text"
          id="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }
}

TextInput.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
};

TextInput.defaultProps = {
  searchText: '',
  onSearchTextChange: () => {},
};

export default TextInput;
