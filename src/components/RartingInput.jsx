import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RartingInput extends Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          value={ rating }
          type="number"
          name="rating"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

RartingInput.propTypes = {
  rating: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RartingInput;
