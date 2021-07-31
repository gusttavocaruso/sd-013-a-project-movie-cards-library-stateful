import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      movies: props.movies,
      bookmarkedOnly: false,
      selectedGenre: '',
    };
    this.onClick = this.onClick.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onClick(valor) { // 'valor' vem do componente AddMovie;
    this.setState((prevstate) => ({
      movies: [...prevstate.movies, valor],
    }));
  }

  onSearchTextChange(event) {
    this.setState(({ searchText: event.target.value }));
  }

  onBookmarkedChange(event) {
    this.setState(({ bookmarkedOnly: event.target.checked }));
  }

  onSelectedGenreChange(event) {
    this.setState(({ selectedGenre: event.target.value }));
  }

  render() {
    const { state: { searchText, bookmarkedOnly, selectedGenre, movies } } = this;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList
          movies={ movies.filter((movie) => movie.title.toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase())
            || movie.subtitle.toLocaleLowerCase().includes(searchText)
            || movie.storyline.toLocaleLowerCase().includes(searchText))
            .filter((movie) => movie.genre.toLocaleLowerCase().includes(selectedGenre))
            .filter((movie) => (bookmarkedOnly ? movie.bookmarked
              : movie.title.includes(''))) }
          searchText={ searchText }
        />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}
MovieLibrary.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  }).isRequired,
};
export default MovieLibrary;
