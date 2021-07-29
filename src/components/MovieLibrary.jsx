import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

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
  }

  filterMovie = ({ target }) => {
    const { value } = target;
    const { movies } = this.props;
    if (value !== '') {
      const filteredMovies = movies
        .filter((element) => element.title.toLowerCase().includes(value.toLowerCase())
          || element.subtitle.toLowerCase().includes(value.toLowerCase())
          || element.storyline.toLowerCase().includes(value.toLowerCase()));
      this.setState({ movies: filteredMovies });
    } else {
      this.setState({ movies });
    }
  };

  filterBookmarked = ({ target }) => {
    const { checked } = target;
    const { movies } = this.props;
    if (checked) {
      const filteredMovies = movies.filter(
        ({ bookmarked }) => bookmarked === true,
      );
      this.setState({ movies: filteredMovies });
    } else {
      this.setState({ movies });
    }
  };

  filterGenre = ({ target }) => {
    const { value } = target;
    const { movies } = this.props;
    if (value !== '') {
      const filteredMovies = movies.filter(({ genre }) => genre === value);
      this.setState({ movies: filteredMovies });
    } else {
      this.setState({ movies });
    }
  };

  onSearchTextChange = ({ target }) => {
    const { value } = target;
    this.setState({ searchText: value });
    this.filterMovie({ target });
  };

  onBookmarkedChange = ({ target }) => {
    this.setState({ bookmarkedOnly: target.checked });
    this.filterBookmarked({ target });
  };

  onSelectedGenreChange = ({ target }) => {
    this.setState({ selectedGenre: target.value });
    this.filterGenre({ target });
  };

  addNewMovie = (newMovie) => {
    const { movies } = this.props;
    return this.setState({ movies: [...movies, newMovie] });
  };

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addNewMovie } />
      </div>
    );
  }
}

export default MovieLibrary;
