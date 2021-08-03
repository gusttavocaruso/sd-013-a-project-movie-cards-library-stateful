import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyline"
          data-testid="storyline-input"
          cols="30"
          rows="10"
          name="storyline"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Storyline;
