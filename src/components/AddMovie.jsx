import React from 'react';
import PropTypes from 'prop-types';
import TitleInput from './movieForm/TitleInput';
import SubtitleInput from './movieForm/SubtitleInput';
import ImageURLInput from './movieForm/ImageURLInput';
import StoryLineInput from './movieForm/StoryLineInput';
import RatingInput from './movieForm/RatingInput';
import GenreInput from './movieForm/GenreInput';

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

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, storyline, rating, genre, imagePath } = this.state;
    const { onClick } = this.props;
    return (
      <form onSubmit={ this.handleSubmit } data-testid="add-movie-form">
        <TitleInput value={ title } onChange={ this.handleChange } />
        <SubtitleInput value={ subtitle } onChange={ this.handleChange } />
        <ImageURLInput value={ imagePath } onChange={ this.handleChange } />
        <StoryLineInput value={ storyline } onChange={ this.handleChange } />
        <RatingInput value={ Number(rating) } onChange={ this.handleChange } />
        <GenreInput value={ genre } onChange={ this.handleChange } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
