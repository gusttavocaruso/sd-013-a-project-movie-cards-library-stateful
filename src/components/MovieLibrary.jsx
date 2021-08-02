import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // searchText: '',
      // bookmarkedOnly: false,
      // selectedGenre: '',
      movies: props.movies,
    };
  }

  onClick = (objState) => {
    const { movies } = this.state;
    this.setState({ movies: [...movies, objState] });
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <SearchBar />
        <AddMovie onClick={ this.onClick } />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
