import React from 'react';
import PropTypes from 'prop-types';
import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImageURLInput from './ImageURLInput';
import StoryLineInput from './StoryLineInput';
import RatingInput from './RatingInput';
import GenreInput from './GenreInput';
import SubmitForm from './SubmitForm';

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

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      genre: 'action',
      imagePath: '',
    });
  }

  handleClick = (callback) => {
    callback(this.state);
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
        <SubmitForm click={ () => this.handleClick(onClick) } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
