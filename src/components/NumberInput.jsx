import React from 'react';
import PropTypes from 'prop-types';

class NumberInput extends React.Component {
  render() {
    const { HandleChange, componentValue } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          type="number"
          value={ componentValue }
          data-testid="rating-input"
          onChange={ HandleChange }
          name="rating"
        />
      </label>
    );
  }
}

NumberInput.propTypes = {
  HandleChange: PropTypes.func,
  componentValue: PropTypes.number,
};

NumberInput.defaultProps = {
  HandleChange: undefined,
  componentValue: undefined,
};

export default NumberInput;
