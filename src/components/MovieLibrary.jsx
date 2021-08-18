import React from 'react';
import AddMovie from './AddMovie';
// import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  addMovie = (movie) => {
    const { movies } = this.state;

    this.setState({ movies: [...movies, movie] });
  }

  render() {
    return (
      <main>
        <SearchBar />
        {/* <MovieList /> */}
        <AddMovie onClick={ this.addMovie } />
      </main>
    );
  }
}

export default MovieLibrary;
