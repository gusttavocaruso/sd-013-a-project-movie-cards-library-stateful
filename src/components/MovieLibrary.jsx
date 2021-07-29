import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookMarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  render() {
    const { searchText, bookMarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ (event) => {
            const searchedText = event.target.value;
            this.setState({
              searchText: searchedText,
              movies: movies.filter(({ title, subtitle, storyline }) => (
                title.toLowerCase().includes(searchedText.toLowerCase())
              || subtitle.toLowerCase().includes(searchedText.toLowerCase())
              || storyline.toLowerCase().includes(searchedText.toLowerCase())
              )),
            });
          } }
          bookmarkedOnly={ bookMarkedOnly }
          onBookmarkedChange={ (event) => {
            this.setState({
              bookMarkedOnly: event.target.checked,
              movies: movies.filter(({ bookmarked }) => (
                bookmarked === event.target.checked
              )),
            });
          } }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ (event) => {
            this.setState({
              selectedGenre: event.target.value,
              movies: movies.filter(({ genre }) => (
                genre.toLowerCase().includes(event.target.value.toLowerCase())
              )),
            });
          } }
        />
        <MovieList movies={ movies } />
        <AddMovie
          onClick={ (state) => {
            this.setState({ movies: [...movies, state] });
          } }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
