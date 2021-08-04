import React from 'react';
import PropTypes from 'prop-types';

class RatingChange extends React.Component {
  render() {
    const { rating, onChange } = this.props;

    return (
      <label
        data-testid="rating-input-label"
        htmlFor="rating-change"
      >
        Avaliação
        <input
          name="rating"
          id="rating-change"
          type="number"
          value={ rating }
          onChange={ onChange }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

RatingChange.propTypes = {
  rating: PropTypes.string,
  onChange: PropTypes.func,
};

RatingChange.defaultProps = {
  rating: '',
  onChange: [],
};

export default RatingChange;
