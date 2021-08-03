import React from 'react';
import PropTypes from 'prop-types';

class AddImage extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          data-testid="image-input"
          value={ imagePath }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

// AddMovieRating.defaultProps = {
//   rating: 'undefined',
// };

export default AddImage;
