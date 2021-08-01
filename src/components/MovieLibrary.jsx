import React, { Component } from 'react';
import PropTypes from 'prototypes';
import SearchBar from "./SearchBar";
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super();
    this.state = {
      searchText: "",
      bookmarkedOnly: false,
      selectedGenre: "",
      movies: movies.this.props,
    };
  }

  render() {
     const { movies } = this.props;
    // const { title, subtitle, storyline, rating, imagePath,
    // bookmarked, genre }

    return (
      <div>
        <h2>My awesome movie library</h2>
        <SearchBar searchText={ searchText } 
        bookmarkedOnly={ bookmarkedOnly } 
        selectedGenre={ selectedGenre } />
        <MovieList movies={ this.state.movie } />
        <AddMovie movies={ this.props.movies } />
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
MovieLibrary.defaultProps = {
  movies: [],
};

export default MovieLibrary;
