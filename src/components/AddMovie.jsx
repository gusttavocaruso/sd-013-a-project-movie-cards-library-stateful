// implement AddMovie component here
import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      // storyLine: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      subtitle,
      title,
      imagePath,
      // storyLine,
      // rating,
      // genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="input-title-add" data-testid="title-input-label">
          <input
            id="input-title-add"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
          />
          Título
        </label>
        <label htmlFor="input-subtitle-add" data-testid="subtitle-input-label">
          <input
            id="input-subtitle-add"
            name="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleChange }
          />
          Subtítulo
        </label>
        <label htmlFor="input-image-add" data-testid="image-input-label">
          <input
            id="input-image-add"
            name="imagePath"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.handleChange }
          />
          Imagem
        </label>
      </form>
    );
  }
}

// AddMovie.propTypes = {
// //   subtitle: PropTypes.string,
// //   title: PropTypes.string,
// //   imagePath: PropTypes.string,
// //   storyLine: PropTypes.string,
// //   rating: PropTypes.number,
// //   genre: PropTypes.string,
// };

export default AddMovie;
