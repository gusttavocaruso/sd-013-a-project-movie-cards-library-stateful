import React from 'react';

class InputImageAndStoryline extends React.Component {
  render() {
    const { imagePath, storyline, onChangeFunction } = this.props;
    return(
      <span>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
          data-testid="image-input"
          name="imagePath"
          type="text"
          value={ imagePath }
          id="image-input"
          onChange={ onChangeFunction }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea 
            data-testid="storyline-input" 
            name="storyline" 
            value={ storyline } 
            id="storyline-input" 
            onChange={ onChangeFunction } 
            cols="30" 
            rows="10"
          >
          </textarea>
        </label>
      </span>
    );
  }
}

export default InputImageAndStoryline;