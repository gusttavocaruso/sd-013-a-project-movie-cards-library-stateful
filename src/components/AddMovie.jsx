import React, { Component } from 'react';
import GenreInput from './GenreInput';
import Image from './Image';
import RatingInput from './RatingInput';
import TextArea from './TextArea';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  // A lot of help from Eduardo Santos to do this
  handleChange = (e) => {
    const { target: { name, value } } = e;
    this.setState({ [name]: value });
  }

  render() {
    const { handleChange, state, props } = this;
    const { onClick } = props;
    const { title, subtitle, imagePath, storyline, rating, genre } = state;

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            data-testid="title-input"
            type="text"
            name="title"
            id="title"
            value={ title }
            onChange={ handleChange }
          />
        </label>

        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            name="subtitle"
            id="subtitle"
            value={ subtitle }
            onChange={ handleChange }
          />
        </label>

        <Image imagePath={ imagePath } handleChange={ handleChange } />
        <TextArea storyline={ storyline } handleChange={ handleChange } />
        <RatingInput rating={ rating } handleChange={ handleChange } />
        <GenreInput genre={ genre } handleChange={ handleChange } />
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   subtitle: PropTypes.string,
//   title: PropTypes.string,
//   imagePath: PropTypes.string,
//   storyline: PropTypes.string,
//   rating: PropTypes.number,
//   genre: PropTypes.string,
// };

// AddMovie.defaultProps = {
//   subtitle: '',
//   title: '',
//   imagePath: '',
//   storyline: '',
//   rating: 0,
//   genre: 'action',
// };

export default AddMovie;
