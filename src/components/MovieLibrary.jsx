import React, { Component } from 'react';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  filterMovies = () => {
    const { movies, selectedGenre, searchText, bookmarkedOnly } = this.state;
    if (selectedGenre !== '') {
      return movies.filter((movie) => movie.genre.includes(selectedGenre));
    }
    if (bookmarkedOnly) {
      return movies.filter((movie) => movie.bookmarked === true);
    }
    const filted = movies.filter((movie) => {
      return (
        movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText)
      );
    });
    return filted;
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <AddMovie />
        <MovieList movies={ this.filterMovies() } />
      </div>
    );
  }
}

export default MovieLibrary;
