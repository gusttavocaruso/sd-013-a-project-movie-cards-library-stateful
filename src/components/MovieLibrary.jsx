import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    // const { movies } = this.props; //(Matheus==outra forma de trazer a prop)
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.Mymovie = this.Mymovie.bind(this);
  }

  Mymovie = (param) => {
    const
      { movies } = this.state;
    this.setState({ movies: [...movies, param] }); // feito em grupo Guilherme(b) Ygor, Leme.
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library</h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ () => {} }
          bookmarkedOnly={ bookmarkedOnly }
          onselectedGenre={ () => { } }
          selectedGenre={ selectedGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.Mymovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: true,
    genre: PropTypes.string,
  })).isRequired,
};

export default MovieLibrary;
