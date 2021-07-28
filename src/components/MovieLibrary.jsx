// implement MovieLibrary component here
import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  
  constructor(props) {
    super(props);
    
    const { movies } = this.props
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies,
    }
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { movies } = this.props
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar 
          searchText = {searchText} 
          onSearchTextChange = {this.handleChange}
          bookmarkedOnly = {bookmarkedOnly}
          onBookmarkedChange = {this.handleChange}
          selectedGenre = {selectedGenre}
          onSelectedGenreChange = {this.handleChange}
        />
        <MovieList movies = { movies }  />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;