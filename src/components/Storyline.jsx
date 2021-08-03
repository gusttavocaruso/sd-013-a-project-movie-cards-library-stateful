import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Storyline extends Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="storyline-input"
            type="text"
            name="storyline"
            value={ storyline }
            onChange={ handleChange }
            data-testid="storyline-input"
          />
        </label>
      </div>
    );
  }
}

Storyline.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Storyline;
