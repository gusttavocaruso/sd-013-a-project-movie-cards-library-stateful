// implement AddMovie component here
import React, { Component } from 'react';
import ContentCard from './ContentCard';
import HeaderCard from './HeaderCard';
import GenreSelect from './GenreSelect';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      genre: 'action',
      rating: 0,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleChangeRating = (e) => {
    this.setState({
      rating: e.target.value,
    });
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      genre,
      rating,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <HeaderCard
          title={ title }
          subtitle={ subtitle }
          handleChange={ this.handleChange }
        />
        <ContentCard
          imagePath={ imagePath }
          rating={ rating }
          storyline={ storyline }
          handleChange={ this.handleChange }
        />
        <GenreSelect genre={ genre } handleChange={ this.handleChange } />
      </form>
    );
  }
}
