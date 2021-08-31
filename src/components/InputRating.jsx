import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { value, clickChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          type="number"
          value={ value }
          data-testid="rating-input"
          onChange={ clickChange }
          name="rating"
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  value: PropTypes.number,
  clickReset: PropTypes.func,
}.isRequired;
export default InputRating;
