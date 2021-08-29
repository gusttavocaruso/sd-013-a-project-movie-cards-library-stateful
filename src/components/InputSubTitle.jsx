import React from 'react';
import PropTypes from 'prop-types';

class InputSubTitle extends React.Component {
  render() {
    const { value, clickChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          type="text"
          value={ value }
          data-testid="subtitle-input"
          onChange={ clickChange }
          name="subtitle"
        />
      </label>
    );
  }
}

InputSubTitle.propTypes = {
  value: PropTypes.string,
  clickReset: PropTypes.func,
}.isRequired;
export default InputSubTitle;
