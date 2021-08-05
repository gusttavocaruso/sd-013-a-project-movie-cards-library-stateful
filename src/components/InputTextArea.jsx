import React from 'react';
import PropTypes from 'prop-types';

class InputTextArea extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="textearea-add-movie" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          onChange={ handleChange }
          value={ value }
          id="textearea-add-movie"
          cols="30"
          rows="3"
        />
      </label>
    );
  }
}

InputTextArea.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default InputTextArea;
