import React from 'react';
import TitleInput from './forms/Title';
import SubtitleInput from './forms/Subtitle';
import ImagePathUrl from './forms/ImagePathReact';
import StorylineInput from './forms/StorylineInput';
import RatingInput from './forms/RatingInput';
import SelectOption from './forms/SelectOption';
import ButtonSubmit from './forms/ButtonSubmit';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    const { title, subtitle, imagePath,
      storyline, rating, genre,
    } = this.state;
    return (
      <form action="#" data-testid="add-movie-form" onSubmit={ this.handleSubmit }>
        <TitleInput value={ title } onChange={ this.handleChange }/>
        <SubtitleInput value={ subtitle } onChange={ this.handleChange }/>
        <ImagePathUrl value={ imagePath } onChange={ this.handleChange }/>
        <StorylineInput  value={ storyline } onChange={ this.handleChange }/>
        <RatingInput value={ rating } onChange={ this.handleChange }/>
        <SelectOption value={ genre } onChange={ this.handleChange } />
        <ButtonSubmit />
      </form>
    );
  }
}

export default AddMovie;
