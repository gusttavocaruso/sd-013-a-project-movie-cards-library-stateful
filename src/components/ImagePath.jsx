import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class ImagePath extends React.Component {
  render() {
    const { image, onChange } = this.props;

    return (
      <Input
        labelText="Imagem"
        labelDataType="image-input-label"
        value={ image }
        onChange={ onChange }
        inputDataType="image-input"
        htmlFor="imagePath"
      />
    );
  }
}

const { string, func } = PropTypes;

ImagePath.propTypes = {
  image: string,
  onChange: func,
}.isRequired;

export default ImagePath;
