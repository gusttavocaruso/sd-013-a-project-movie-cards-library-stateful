import React from 'react';

class Image extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <form>
        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          <input
            name="imagePath"
            value={ value }
            id="text"
            data-testid="image-input"
            onChange={ onChange }
          />
        </label>
      </form>
    );
  }
}

export default Image;
