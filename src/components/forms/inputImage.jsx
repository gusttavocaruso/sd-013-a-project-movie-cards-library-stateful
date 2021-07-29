import React from 'react';

class InputImage extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <div>
        <label data-testid="image-input-label" htmlFor="img-ipt">
          Imagem
          <input
            data-testid="image-input"
            id="img-ipt"
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
