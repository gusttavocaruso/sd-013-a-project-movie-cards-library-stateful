import React from 'react';
import PropTypes from 'prop-types';

class RatingAddMovie extends React.Component {
  render() {
    const { rating, onRatingChange } = this.props;
    return (
      <section>
        <label htmlFor="rating-add-movie" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            id="rating-add-movie"
            name="rating"
            data-testid="rating-input"
            value={ rating }
            onChange={ onRatingChange }
          />
        </label>
      </section>
    );
  }
}

RatingAddMovie.propTypes = {
  rating: PropTypes.number.isRequired,
  onRatingChange: PropTypes.func.isRequired,
};

export default RatingAddMovie;
