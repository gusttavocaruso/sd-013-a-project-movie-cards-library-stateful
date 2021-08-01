import React, { Component } from 'react';
import MovieButton from './MovieButton';
import MovieGender from './MovieGender';
import MovieImagePath from './MovieImagePath';
import MovieRating from './MovieRating';
import MovieSinopse from './MovieSinopse';
import MovieSubTitle from './MovieSubtitle';
import MovieTitle from './MovieTitle';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieRating: '0',
      movieTitle: '',
      movieSubTitle: '',
      movieImage: '',
      storyline: '',
      genre: 'action',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick = () => {
    this.setState({
      movieRating: '0',
      movieTitle: '',
      movieSubTitle: '',
      movieImage: '',
      storyline: '',
      genre: 'action',
    });
  }

  render() {
    const {
      movieRating,
      movieTitle,
      movieSubTitle,
      movieImage,
      storyline,
      genre } = this.state;
    return (
      <div className="movie-add-div">
        <form
          onSubmit={ (event) => { event.preventDefault(); } }
          data-testid="add-movie-form"
          className="movie-add"
        >
          <MovieTitle title={ movieTitle } funcao={ this.handleChange } />
          <MovieSubTitle subtitle={ movieSubTitle } funcao={ this.handleChange } />
          <MovieImagePath imagepath={ movieImage } funcao={ this.handleChange } />
          <MovieSinopse sinopse={ storyline } funcao={ this.handleChange } />
          <MovieRating rating={ movieRating } funcao={ this.handleChange } />
          <MovieGender gender={ genre } funcao={ this.handleChange } />
          <MovieButton funcao={ this.handleChange } />
        </form>
      </div>
    );
  }
}

export default AddMovie;
