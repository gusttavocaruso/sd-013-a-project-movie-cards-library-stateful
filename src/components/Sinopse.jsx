import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sinopse extends Component {
  render() {
    const { sinopse, onChange } = this.props;

    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <input
          data-testid="storyline-input"
          name="storyline"
          value={ sinopse }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Sinopse.propTypes = {
  sinopse: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Sinopse;
