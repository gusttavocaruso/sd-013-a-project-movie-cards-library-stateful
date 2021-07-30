import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(movie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, movie] });
  }

  onSearchTextChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
    console.log(name);
  }

  onBookmarkedChange = ({ target }) => {
    const { name, checked } = target;
    this.setState({ [name]: checked });
  }

  onSelectedGenreChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const {
      movies,
      searchText,
      bookmarkedOnly,
      selectedGenre } = this.state;
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
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}
export default MovieLibrary;
