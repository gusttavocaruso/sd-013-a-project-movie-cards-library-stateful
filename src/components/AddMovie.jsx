import React from 'react';
import TitleInput from './movieForm components/TitleInput';
import SubtitleInput from './movieForm components/SubtitleInput';
import StoryLineInput from './movieForm components/StoryLineInput';
import RatingInput from './movieForm components/RatingInput';
import GenreInput from './movieForm components/GenreInput';
import ImageURLInput from './movieForm components/ImageURLInput';
import SubmitForm from './movieForm components/SubmitForm';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      genre: 'action',
      imagePath: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { title, subtitle, storyline, rating, genre, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleInput value={ title } onChange={ this.handleChange } />
        <SubtitleInput value={ subtitle } onChange={ this.handleChange } />
        <StoryLineInput value={ storyline } onChange={ this.handleChange } />
        <RatingInput value={ rating } onChange={ this.handleChange } />
        <GenreInput value={ genre } onChange={ this.handleChange } />
        <ImageURLInput value={ imagePath } onChange={ this.handleChange } />
        <SubmitForm />
      </form>
    );
  }
}

export default AddMovie;
