import PropTypes from 'prop-types';
import React from 'react';

class AddRating extends React.Component {
  render() {
    const { rating, handleChangeText } = this.props;
    return (
      <label htmlFor="input-change-rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ handleChangeText }
          id="input-change-rating"
        />
      </label>
    );
  }
}

AddRating.propTypes = {
  handleChangeText: PropTypes.func.isRequired,
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default AddRating;
