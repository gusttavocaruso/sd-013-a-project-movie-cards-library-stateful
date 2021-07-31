// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Title from './AddMovieComponents/Title';
import Subtitle from './AddMovieComponents/Subtitle';
import ImagePath from './AddMovieComponents/ImagePath';
import Storyline from './AddMovieComponents/Storyline';
import Rating from './AddMovieComponents/Rating';
import Genre from './AddMovieComponents/Genre';

class AddMovie extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     subtitle: '',
  //     title: '',
  //     imagePath: '',
  //     storyline: '',
  //     rating: 0,
  //     genre: 'action',
  //   };

  //   this.handleRatingChange = this.handleRatingChange.bind(this);
  // }

  // handleRatingChange(e) {
  //   this.setState({ rating: e.target.value });
  // }

  render() {
    // const { onClick } = this.props;
    // const { subtitle,
    //   title,
    //   imagePath,
    //   storyline,
    //   rating,
    //   genre,
    // } = this.state;

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
