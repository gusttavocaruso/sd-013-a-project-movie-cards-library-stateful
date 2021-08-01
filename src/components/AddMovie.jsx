// implement AddMovie component here
import React, { Component } from 'react';
import Subtitle from './Subtitle';
import Title from './Title';
import Image from './Image';
import TextArea from './TextArea';
import Ratings from './Ratings';
import Genre from './Genre';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',

    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    // const { onClick } = this.props;

    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <Title value={ title } onChange={ this.handleChange } />
        <Subtitle value={ subtitle } onChange={ this.handleChange } />
        <Image value={ imagePath } onChange={ this.handleChange } />
        <TextArea value={ storyline } onChange={ this.handleChange } />
        <Ratings value={ rating } onChange={ this.handleChange } />
        <Genre value={ genre } onChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;
