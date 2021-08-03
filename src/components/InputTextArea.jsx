import React from 'react';

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
          rows="10"
        />
      </label>
    );
  }
}

export default InputTextArea;
