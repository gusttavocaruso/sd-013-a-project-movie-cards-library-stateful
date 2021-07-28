import React, { Component } from 'react';
import InputTitle from './InputsForm/InputTitle';
import InputSubtitle from './InputsForm/InputSubtitle';
import InputImage from './InputsForm/InputImage';
import InputStoryline from './InputsForm/InputStoryline';
import InputGenre from './InputsForm/InputGenre';
import InputRating from './InputsForm/InputRating';
import InputSendButton from './InputsForm/InputSendButton';

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
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    console.log('handleClick() method');
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
          <InputSendButton onClick={ this.handleClick } />
        </form>
      </div>
    );
  }
}
