import React from 'react';
import PropTypes from 'prop-types';

class Rate extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     rating: 0,
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange(event) {
  //   this.setState({ rating: event.target.value });
  // }

  render() {
    const { rating, handleChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rate">
        Avaliação
        <input
          name="rating"
          type="number"
          data-testid="rating-input"
          value={ rating }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Rate.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Rate;
