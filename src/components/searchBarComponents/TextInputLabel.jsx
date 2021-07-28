import React from 'react';
import PropTypes from 'prop-types';

class TextInputLabel extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;

    return (
      <label
        htmlFor="text-input"
        data-testid="text-input-label"
      >
        Inclui o texto:
        <input
          type="text"
          name="text-input"
          data-testid="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }
}

TextInputLabel.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default TextInputLabel;
