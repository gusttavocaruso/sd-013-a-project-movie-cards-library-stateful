import React from 'react';

class InputSubtitle extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="subtitle-add-movie" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          id="subtitle-add-movie"
          value={ value }
          data-testid="subtitle-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default InputSubtitle;
