import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieRating extends Component {
  render() {
    const { rating, onChangeFunc } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          data-testid="rating-input"
          id="rating"
          type="number"
          name="rating"
          value={ rating }
          onChange={ onChangeFunc }
        />
      </label>
    );
  }
}

AddMovieRating.propTypes = {
  rating: PropTypes.number.isRequired,
  onChangeFunc: PropTypes.func.isRequired,
};

export default AddMovieRating;
