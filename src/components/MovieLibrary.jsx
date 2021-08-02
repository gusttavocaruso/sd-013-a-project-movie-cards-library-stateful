// implement MovieLibrary component here
import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies,
    };
    this.filterMovies = this.filterMovies.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  changeHandle = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies} = this.state
    const search = movies.filter((movie) => 
    movie.title.includes(searchText) || 
    movie.subtitle.includes(searchText) || 
    movie.storyline.includes(searchText));
    
    if (bookmarkedOnly) {
    return search.filter ((movie) => movie.bookmarked)
    } else if (selectedGenre) {
      return search.filter((movie) => movie.genre === selectedGenre)
    } else {
    return search
    }
  }

  addOneMovie = (movie) => {
    this.setState((previousState) => ({
      movies: [...previousState.movies, movie], 
    }));
  }

  
  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText = { searchText }
          onSearchTextChange = { this.changeHandle }
          bookmarkedOnly = { bookmarkedOnly }
          onBookmarkedChange = { this.changeHandle }
          selectedGenre = { selectedGenre }
          onSelectedGenreChange = { this.changeHandle }
        />
        <MovieList movies = { this.filterMovies() } />
        <AddMovie onClick = {this.addOneMovie}/>
      </div>
    );
  }
}

export default MovieLibrary;
