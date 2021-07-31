import React, { Component } from 'react';
import Title from './inputs/Title';
import Subtitle from './inputs/Subtitle';
import Image from './inputs/Image';
import Storyline from './inputs/Storyline';
import Rating from './inputs/Rating';
import Genre from './inputs/Genre';

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
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { onClick } = this.props;

    const {
      title,
      subtitle,
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
        <Storyline value={ storyline } onChange={ this.handleChange } />
        <Rating value={ rating } onChange={ this.handleChange } />
        <Genre value={ genre } onChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;
