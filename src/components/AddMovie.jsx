import React from 'react';
import PropTypes from 'prop-types';
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

  // https://stackoverflow.com/questions/46539480/react-clearing-an-input-value-after-form-submit
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
        <StoryLineInput value={ storyline } onChange={ this.handleChange } />
        <RatingInput value={ Number(rating) } onChange={ this.handleChange } />
        <GenreInput value={ genre } onChange={ this.handleChange } />
        <ImageURLInput value={ imagePath } onChange={ this.handleChange } />
        <SubmitForm click={ () => this.handleClick(onClick) } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
