import React from 'react';
import Proptypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <section>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            name="rating"
            type="number"
            value={ value }
            data-testid="rating-input"
            onChange={ onChange }
          />
        </label>
      </section>
    );
  }
}

InputRating.propTypes = {
  onChange: Proptypes.func,
  value: Proptypes.string,
}.isrequired;

export default InputRating;
