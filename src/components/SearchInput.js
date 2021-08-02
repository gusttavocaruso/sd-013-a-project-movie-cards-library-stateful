import React from 'react';
import PropTypes from 'prop-types';

class SearchInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        data-testid="text-input-label"
        htmlFor="inclui_texto"
      >
        Inclui o texto
        <input
          data-testid="text-input"
          type="text"
          id="inclui_texto"
          onChange={ onChange }
          value={ value }
        />
      </label>
    );
  }
}

SearchInput.propTypes = {
  onChange: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchInput;
