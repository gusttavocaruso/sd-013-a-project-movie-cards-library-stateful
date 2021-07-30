import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label htmlFor="teste" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          id="teste"
          value={ rating }
          onChange={ handleChange }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

Rating.propTypes = {
  handleChange: PropTypes.func,
}.isRequired;

export default Rating;
