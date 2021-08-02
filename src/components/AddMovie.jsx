// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Title from './AddMovieComponents/AddMovieTitle';
import Subtitle from './AddMovieComponents/AddMovieSubtitle';
import ImagePath from './AddMovieComponents/AddMovieImagePath';
import Storyline from './AddMovieComponents/AddMovieStoryline';
import Rating from './AddMovieComponents/AddMovieRating';
import Genre from './AddMovieComponents/AddMovieGenre';

class AddMovie extends React.Component {
  render() {
    // const { onClick } = this.props;

    return (
      <main>
        <form method="post" data-testid="add-movie-form">
          <Title />
          <Subtitle />
          <ImagePath />
          <Storyline />
          <Rating />
          <Genre />
          {/* <button data-testid="send-button">Adicionar filme</button> */}
        </form>
      </main>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
