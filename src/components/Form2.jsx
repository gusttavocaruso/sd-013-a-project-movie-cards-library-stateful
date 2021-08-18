import React from 'react';
import PropTypes from 'prop-types';

class Form2 extends React.Component {
  render() {
    const { storyline, onChange, rating } = this.props;
    return (
      <div>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            id="storyline"
            cols="30"
            rows="10"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ onChange }
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            id="rating"
            value={ rating }
            data-testid="rating-input"
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}
Form2.propTypes = {
  storyline: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Form2;
