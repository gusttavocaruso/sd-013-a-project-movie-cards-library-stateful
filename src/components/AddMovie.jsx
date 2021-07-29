// implement AddMovie component
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GenreSelector from './AddMovie/GenreSelector';
import ImageInput from './AddMovie/ImageInput';
import RatingInput from './AddMovie/RatingInput';
import StoryLine from './AddMovie/StoryLine';
import SubtitleInput from './AddMovie/SubtitleInput';
import TitleInput from './AddMovie/TitleInput';
import ButtonAdd from './AddMovie/ButtonAdd';
import './AddMovie/AddMovie.css';

const INITIAL_STATE = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
    this.state = INITIAL_STATE;
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  addNewMovie(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(INITIAL_STATE);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form className="add-movie-form" data-testid="add-movie-form">
        <TitleInput title={ title } handleChange={ this.handleChange } />
        <SubtitleInput subtitle={ subtitle } handleChange={ this.handleChange } />
        <ImageInput imagePath={ imagePath } handleChange={ this.handleChange } />
        <StoryLine storyline={ storyline } handleChange={ this.handleChange } />
        <RatingInput rating={ rating } handleChange={ this.handleChange } />
        <GenreSelector genre={ genre } handleChange={ this.handleChange } />
        <ButtonAdd addNewMovie={ this.addNewMovie } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
