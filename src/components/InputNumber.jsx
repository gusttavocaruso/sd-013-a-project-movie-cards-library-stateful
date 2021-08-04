import React from 'react';
import PropTypes from 'prop-types';

class InputNumber extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="number-add-movie" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          name="rating"
          id="number-add-movie"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputNumber.propTypes = {
  value: PropTypes.number,
  handleChange: PropTypes.func,
}.isRequired;

export default InputNumber;
