import React from 'react';

class InputImagem extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="imagem-add-movie" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          id="imagem-add-movie"
          value={ value }
          data-testid="image-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default InputImagem;
