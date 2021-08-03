// // Componente criado para resolução do requisito 12
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieRating extends Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          value={ rating }
          onChange={ handleChange }
        />
      </label>);
  }
}

AddMovieRating.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

// AddMovieRating.defaultProps = {
//   rating: 'undefined',
// };

export default AddMovieRating;
