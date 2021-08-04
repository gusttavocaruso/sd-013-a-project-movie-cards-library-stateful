import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RatingInput extends Component {
  render() {
    const { rating, handleChange } = this.props;

    return (
      <label htmlFor="number-input" data-testid="rating-input-label">
        Avaliação

        <input
          data-testid="rating-input"
          type="number"
          name="rating"
          id="number-input"
          value={ rating }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  rating: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

RatingInput.defaultProps = {
  rating: 0,
};

export default RatingInput;
