// implement MovieLibrary component here
import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.createMovieList = this.createMovieList.bind(this);
  }

  onSearchTextChange({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  onBookmarkedChange({ target }) {
    this.setState({
      bookmarkedOnly: target.checked,
    });
  }

  onSelectedGenreChange({ target }) {
    this.setState({
      selectedGenre: target.value,
    });
  }

  onClick(state) {
    this.setState((estadoAnterior) => ({
      movies: [...estadoAnterior.movies, state],
    }));
  }

  createMovieList() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let moviesResults = movies;
    if (bookmarkedOnly) {
      moviesResults = moviesResults.filter((movie) => movie.bookmarked === true);
    }
    switch (selectedGenre) {
    case 'action':
      moviesResults = moviesResults.filter((movie) => movie.genre === 'action');
      break;
    case 'comedy':
      moviesResults = moviesResults.filter((movie) => movie.genre === 'comedy');
      break;
    case 'thriller':
      moviesResults = moviesResults.filter((movie) => movie.genre === 'thriller');
      break;
    default:
      break;
    }
    moviesResults = moviesResults.filter((movie) => (
      movie.title.toLowerCase().match(searchText.toLowerCase())
        || movie.subtitle.toLowerCase().match(searchText.toLowerCase())
        || movie.storyline.toLowerCase().match(searchText.toLowerCase())
    ));
    return moviesResults;
  }

  render() {
    const movies = this.createMovieList();
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

export default MovieLibrary;
