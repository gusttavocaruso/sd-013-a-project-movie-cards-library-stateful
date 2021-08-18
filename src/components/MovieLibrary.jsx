import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
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

  search = () => {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    const textSearch = movies.filter((movie) => (
      movie.title.toLowerCase().includes(searchText.toLowerCase())
      || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
      || movie.storyline.toLowerCase().includes(searchText.toLowerCase())
    ));

    const bookmarked = bookmarkedOnly
      ? textSearch.filter((movie) => movie.bookmarked) : textSearch;

    const searchResults = selectedGenre !== ''
      ? bookmarked.filter((movie) => movie.genre === selectedGenre) : bookmarked;

    return searchResults;
  }

  handleChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value });
  }

  addMovie = (movie) => {
    const { movies } = this.state;

    this.setState({ movies: [...movies, movie] });
  }

  render() {
    const searchResults = this.search();
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <main>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ searchResults } />
        <AddMovie onClick={ this.addMovie } />
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
