import React from 'react';
import PropTypes from 'prop-types';

class Rate extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rate">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          value={ rating }
          // onChange={ handleChange }
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

Rate.propTypes = {
  rating: PropTypes.number.isRequired,
  // handleChange: PropTypes.func.isRequired,
};

export default Rate;
