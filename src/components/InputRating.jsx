// Requisito 12

import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { rating, handleChange } = this.props;

    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          id="rating"
          type="number"
          name="rating"
          data-testid="rating-input"
          onChange={ handleChange }
          value={ rating }
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  rating: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputRating;
