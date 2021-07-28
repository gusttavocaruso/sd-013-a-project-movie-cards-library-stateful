import React from 'react';

class InputImage extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
        <div>
          <label data-testid="image-input-label">
            Imagem
            <input
              data-testid="image-input"
              type="text"
              value={ value }
              onChange={ onChange }
              name="imagePath"
            />
          </label>
        </div>
    );
  }
}

export default InputImage;
