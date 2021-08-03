import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { storyline, handleChange } = this.props;

    return (
      <label htmlFor="text-input" data-testid="storyline-input-label">
        Sinopse
        <input
          data-testid="storyline-input"
          type="textarea"
          name="storyline"
          id="text-input"
          value={ storyline }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  storyline: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

TextArea.defaultProps = {
  storyline: '',
};

export default TextArea;
