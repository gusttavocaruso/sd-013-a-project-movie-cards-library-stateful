import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './AddMovieFormComponents/Title';
import Subtitle from './AddMovieFormComponents/Subtitle';
import ImagePath from './AddMovieFormComponents/ImagePath';
import Storyline from './AddMovieFormComponents/Storyline';
import Rating from './AddMovieFormComponents/Rating';
import Genre from './AddMovieFormComponents/Genre';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange =(event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  handleClick = () => {
    const { onClick } = this.props;
    onClick(this.state);

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { handleChange, handleClick } = this;

    return (
      <form data-testid="add-movie-form">
        <div>
          <Title value={ title } onChange={ handleChange } />
          <Subtitle value={ subtitle } onChange={ handleChange } />
          <ImagePath value={ imagePath } onChange={ handleChange } />
          <Storyline value={ storyline } onChange={ handleChange } />
          <Rating value={ rating } onChange={ handleChange } />
          <Genre value={ genre } onChange={ handleChange } />
          <button
            type="button"
            data-testid="send-button"
            onClick={ handleClick }
          >
            Adicionar filme
          </button>
        </div>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
