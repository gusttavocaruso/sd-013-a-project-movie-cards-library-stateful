import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputRating extends Component {
  render() {
    const { rating, onChange } = this.props;
    return (
      <div>
        <label htmlFor="movie-rate" data-testid="rating-input-label">
          Avaliação
          <input
            min="0"
            max="5"
            step="0.5"
            id="movie-rate"
            type="number"
            name="rating"
            value={ rating }
            onChange={ onChange }
            data-testid="rating-input"
          />
        </label>
      </div>
    );
  }
}

InputRating.propTypes = {
  rating: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputRating;
