import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating, onChange } = this.props;

    return (
      <label data-testid="rating-input-label" htmlFor="avaliacao">
        Avaliação
        <input
          name="rating"
          onChange={ onChange }
          data-testid="rating-input"
          value={ rating }
          id="avaliacao"
          type="number"
        />
      </label>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.string,
  onChange: PropTypes.func,
};

Rating.defaultProps = {
  rating: '',
  onChange: {},
};

export default Rating;
