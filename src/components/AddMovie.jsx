import React from 'react';

import TitleAddMovie from './AddMovieComponets/TitleAddMovie';
import SubtitleAddMovie from './AddMovieComponets/SubtitleAddMovie';
import ImageAddMovie from './AddMovieComponets/ImageAddMovie';
import StoryLineAddMovie from './AddMovieComponets/StoryLineAddMovie';
import RatingAddMovie from './AddMovieComponets/RatingAddMovie';
import GenreAddMovie from './AddMovieComponets/GenreAddMovie';
import ButtonAddMovie from './AddMovieComponets/ButtonAddMovie';

class AddMovie extends React.Component {
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

  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  }

  handleChangeSubtitle = (event) => {
    this.setState({
      subtitle: event.target.value,
    });
  }

  handleChangeImage = (event) => {
    this.setState({
      imagePath: event.target.value,
    });
  }

  handleChangeTextarea = (event) => {
    this.setState({
      storyline: event.target.value,
    });
  }

  handleChangeRating = (event) => {
    this.setState({
      rating: event.target.value,
    });
  }

  handleChangeGenre = (event) => {
    this.setState({
      genre: event.target.value,
    });
  }

  handleClick = () => {
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleAddMovie value={ title } onChange={ this.handleChangeTitle } />
        <SubtitleAddMovie value={ subtitle } onChange={ this.handleChangeSubtitle } />
        <ImageAddMovie value={ imagePath } onChange={ this.handleChangeImage } />
        <StoryLineAddMovie value={ storyline } onChange={ this.handleChangeTextarea } />
        <RatingAddMovie value={ rating } onChange={ this.handleChangeRating } />
        <GenreAddMovie value={ genre } onChange={ this.handleChangeGenre } />
        <ButtonAddMovie onClick={ this.handleClick } />
      </form>
    );
  }
}

export default AddMovie;
