import React, { Component } from 'react';

import PropTypes from 'prop-types';

class RatingInput extends Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          id="rating-input"
          value={ rating }
          onChange={ handleChange }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  handleChange: PropTypes.func,
}.isRequired;

export default RatingInput;
