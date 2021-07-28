import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovieButtom from './AddMovieForms/AddMovieButtom';
import Genre from './AddMovieForms/Genre';
import ImagePath from './AddMovieForms/ImagePath';
import Rating from './AddMovieForms/Rating';
import Storyline from './AddMovieForms/Storyline';
import Subtitle from './AddMovieForms/Subtitle';
import Title from './AddMovieForms/Title';

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

  handleClick = () => {
    const { onClick } = this.props;
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    const arrayMovie = this.state;
    onClick(arrayMovie);
  }

  handleSearch = ({ target }) => {
    const { name } = target;
    let value;

    if (target.type === 'checked') {
      value = target.checked;
    } else if (target.type === 'radio') {
      value = target.id;
    } else {
      value = target.value;
    }

    this.setState({
      [name]: value,
    });
  }

  render() {
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
        <Title value={ title } onChange={ this.handleSearch } />
        <Subtitle value={ subtitle } onChange={ this.handleSearch } />
        <ImagePath value={ imagePath } onChange={ this.handleSearch } />
        <Storyline value={ storyline } onChange={ this.handleSearch } />
        <Rating value={ rating } onChange={ this.handleSearch } />
        <Genre value={ genre } onChange={ this.handleSearch } />
        <AddMovieButtom onClick={ this.handleClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
