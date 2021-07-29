import React from 'react';
import PropTypes from 'prop-types';

import data from '../data';
import TitleInput from './forms/Title';
import SubtitleInput from './forms/Subtitle';
import ImagePathUrl from './forms/ImagePathReact';
import StorylineInput from './forms/StorylineInput';
import RatingInput from './forms/RatingInput';
import SelectOption from './forms/SelectOption';
import ButtonSubmit from './forms/ButtonSubmit';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
      movie: data,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  addNewMovie = (movies) => {
    this.setState((prevState) => ({ movie: [...prevState.movie, movies] }));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath,
      storyline, rating, genre,
    } = this.state;
    const { onClick } = this.props;
    return (
      <form action="#" data-testid="add-movie-form" onSubmit={ this.handleSubmit }>
        <TitleInput value={ title } onChange={ this.handleChange } />
        <SubtitleInput value={ subtitle } onChange={ this.handleChange } />
        <ImagePathUrl value={ imagePath } onChange={ this.handleChange } />
        <StorylineInput value={ storyline } onChange={ this.handleChange } />
        <RatingInput value={ rating } onChange={ this.handleChange } />
        <SelectOption value={ genre } onChange={ this.handleChange } />
        <ButtonSubmit onClick={ onClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
