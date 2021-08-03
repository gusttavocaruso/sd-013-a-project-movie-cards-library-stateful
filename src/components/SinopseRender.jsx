import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SinopseRender extends Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label htmlFor="sinopse" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="sinopse"
          cols="30"
          rows="10"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ handleChange }
        >
          I typed this here, because the Lint is
          annoying and requires me do not tags self-close.
        </textarea>
      </label>
    );
  }
}

SinopseRender.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SinopseRender;
