// InputStoryline (Componente filho de AddMovie)

import React from 'react';
import PropTypes from 'prop-types';

class InputStoryline extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;

    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          id="storyline"
          type="text"
          name="storyline"
          data-testid="storyline-input"
          onChange={ handleChange }
          value={ storyline }
        />
      </label>
    );
  }
}

InputStoryline.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputStoryline;
