import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovieButton from './AddMovieButton';
import GenreInput from './GenreInput';
import Image from './Image';
import RatingInput from './RatingInput';
import TextArea from './TextArea';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: '0',
      genre: 'action',
    };
  }

  // A lot of help from Eduardo Santos to do this
  handleChange = (e) => {
    const { target: { name, value } } = e;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  // Ygor Maia, Guilherme Rodrigues and Gildo Santos helped me a lot to do these functions

  onClick = () => {
    const { state, props } = this;
    const { onClick } = props;
    onClick(state);
    this.resetState();
  }

  resetState = () => {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: '0',
      genre: 'action',
    });
  }

  render() {
    const { handleChange, state, handleSubmit, onClick } = this;
    const { title, subtitle, imagePath, storyline, rating, genre } = state;

    return (
      <form data-testid="add-movie-form" onSubmit={ handleSubmit }>
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
        <AddMovieButton onClick={ onClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
