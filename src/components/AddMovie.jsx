import React, { Component } from 'react';
import PropTypes from 'prop-types';
import inputImage from './InputImage';
import InputStoryLine from './InputStoryLine';
import inputSubTitle from './InputSubTitle';
import InputTitle from './InputTitle';
import RatingForm from './RatingForm';
import SelectedGenre from './SelectedGenre';

export default class AddMovie extends Component {
  constructor() {
    super();

    this.inputMovie = this.inputMovie.bind(this);
    this.clear = this.clear.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  inputMovie({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  clear() {
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <InputTitle value={ title } onChange={ this.inputMovie } />
          <inputSubTitle value={ subtitle } onChange={ this.inputMovie } />
          <inputImage value={ imagePath } onChange={ this.inputMovie } />
          <InputStoryLine value={ storyline } onChange={ this.inputMovie } />
          <RatingForm value={ rating } onChange={ this.inputMovie } />
          <SelectedGenre value={ genre } onChange={ this.inputMovie } />

          <button
            type="button"
            data-testid="send-button"
            onClick={ this.clear }
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
