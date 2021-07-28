import React from 'react';
import PropTypes from 'prop-types';

class AddImage extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="add-image" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          id="add-image"
          type="text"
          value={ value }
          data-testid="image-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddImage.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

AddImage.defaultProps = {
  value: '',
  handleChange: undefined,
};

export default AddImage;
