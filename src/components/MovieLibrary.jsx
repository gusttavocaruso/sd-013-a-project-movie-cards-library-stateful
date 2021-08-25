import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

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
    this.onMoviesSearched = this.onMoviesSearched.bind(this);
    this.addMovieToList = this.addMovieToList.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  onBookmarkedChange(event) {
    this.setState({
      bookmarkedOnly: event.target.checked,
    });
  }

  onSelectedGenreChange(event) {
    this.setState({
      selectedGenre: event.target.value,
    });
  }

  // Com auxílio dos códigos do Notion da turma e do colega Vinicius Dionysio (https://www.notion.so/Projeto-Movie-Cards-Library-Stateful-95781cdbc8eb4f4b871505ab952495ba e https://github.com/tryber/sd-013-a-project-movie-cards-library-stateful/pull/41/files)
  onMoviesSearched() {
    const { movies, bookmarkedOnly, selectedGenre, searchText } = this.state;

    let filteredMoviesList = movies;

    if (bookmarkedOnly) {
      filteredMoviesList = movies.filter((movie) => movie.bookmarked);
    }

    if (selectedGenre !== '') {
      filteredMoviesList = movies.filter((movie) => movie.genre === selectedGenre);
    }

    if (searchText !== '') {
      filteredMoviesList = movies
        .filter((mov) => mov.title.toLowerCase().includes(searchText.toLocaleLowerCase())
          || mov.subtitle.toLowerCase().includes(searchText.toLocaleLowerCase())
          || mov.storyline.toLowerCase().includes(searchText.toLocaleLowerCase()));
    }

    return filteredMoviesList;
  }

  addMovieToList(addedMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, addedMovie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <main>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ (event) => this.onSearchTextChange(event) }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ (event) => this.onBookmarkedChange(event) }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ (event) => this.onSelectedGenreChange(event) }
        />
        <MovieList
          movies={ this.onMoviesSearched() }
        />
        <AddMovie onClick={ this.addMovieToList } />
      </main>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
