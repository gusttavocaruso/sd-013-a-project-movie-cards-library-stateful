import React from 'react';
import PropTypes from 'prop-types';

class InputSubtitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          id="subtitle-input"
          data-testid="subtitle-input"
          value={ value }
          onChange={ onChange }
          name="subtitle"
        />
      </label>
    );
  }
}

InputSubtitle.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default InputSubtitle;
