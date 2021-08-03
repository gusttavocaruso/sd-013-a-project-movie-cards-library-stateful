// implement AddMovie component here
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Subtitle from './Subtitle';
import Title from './Title';
import Image from './Image';
import TextArea from './TextArea';
import Ratings from './Ratings';
import Genre from './Genre';
import Button from './Button';

const initialState = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor() {
    super();
    this.state = initialState;

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleClick(click) {
    click(this.state);
    this.setState(initialState);
  }

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
      <form onSubmit={ this.handleSubmit } data-testid="add-movie-form">
        <Title value={ title } onChange={ this.handleChange } />
        <Subtitle value={ subtitle } onChange={ this.handleChange } />
        <Image value={ imagePath } onChange={ this.handleChange } />
        <TextArea value={ storyline } onChange={ this.handleChange } />
        <Ratings value={ rating } onChange={ this.handleChange } />
        <Genre value={ genre } onChange={ this.handleChange } />
        <Button onClick={ onClick } arb={ () => this.handleClick(onClick) } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
