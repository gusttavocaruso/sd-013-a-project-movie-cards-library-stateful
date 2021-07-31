import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovieGenre from './AddMovieGenre';
import AddMovieImage from './AddMovieImage';
import AddMovieRating from './AddMovieRating';
import AddMovieStoryLine from './AddMovieStoryLine';
import AddMovieSubtitle from './AddMovieSubtitle';
import AddMovieTitle from './AddMovieTitle';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.onChangeFunc = this.onChangeFunc.bind(this);
    this.addMovideFunc = this.addMovideFunc.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onChangeFunc({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  addMovideFunc(event) {
    event.preventDefault();
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    onClick({
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      bookmarked: false,
      genre,
    });
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
      <form data-testid="add-movie-form">
        <AddMovieTitle title={ title } onChangeFunc={ this.onChangeFunc } />
        <AddMovieSubtitle subtitle={ subtitle } onChangeFunc={ this.onChangeFunc } />
        <AddMovieImage imagePath={ imagePath } onChangeFunc={ this.onChangeFunc } />
        <AddMovieStoryLine storyline={ storyline } onChangeFunc={ this.onChangeFunc } />
        <AddMovieRating rating={ rating } onChangeFunc={ this.onChangeFunc } />
        <AddMovieGenre genre={ genre } onChangeFunc={ this.onChangeFunc } />
        <button
          data-testid="send-button"
          onClick={ this.addMovideFunc }
          type="submit"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
