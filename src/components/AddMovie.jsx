import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputsAddMovie/InputTitle/InputTitle';
import InputSubtitle from './InputsAddMovie/InputSubtitle/InputSubtitle';
import InputImage from './InputsAddMovie/InputImage/InputImage';
import InputStoryline from './InputsAddMovie/InputStoryline/InputStoryline';
import InputGenre from './InputsAddMovie/InputGenre/InputGenre';
import InputRating from './InputsAddMovie/InputRating/InputRating';
import InputSendButton from './InputsAddMovie/InputSendButton/InputSendButton';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();
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
    return (
      <div>
        <h1>AddMovie</h1>
        <form data-testid="add-movie-form">
          <InputTitle title={ title } onChange={ this.handleChange } />
          <InputSubtitle subtitle={ subtitle } onChange={ this.handleChange } />
          <InputImage imagePath={ imagePath } onChange={ this.handleChange } />
          <InputStoryline storyline={ storyline } onChange={ this.handleChange } />
          <InputRating rating={ rating } onChange={ this.handleChange } />
          <InputGenre genre={ genre } onChange={ this.handleChange } />
          <InputSendButton click={ this.handleClick } />
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
